/* Contact : l'adresse se copie en un clic, et le formulaire envoie le message
   sans quitter la page, par Web3Forms (le site n'a pas de serveur). En cas
   d'échec, le visiteur peut copier son message pour me l'écrire lui-même. */

/* Certains navigateurs laissent la copie en attente d'une permission : au-delà
   de 1,5 s, on considère qu'elle a échoué pour toujours donner un retour. */
async function copyText(text: string) {
  if (!navigator.clipboard?.writeText) throw new Error("Presse-papiers indisponible");
  await Promise.race([
    navigator.clipboard.writeText(text),
    new Promise((_, reject) => setTimeout(() => reject(new Error("Copie trop longue")), 1500)),
  ]);
}

export function initContact() {
  document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((button) => {
    const label = button.querySelector<HTMLElement>("[data-copy-label]");
    const initial = label?.textContent ?? "";
    let timer = 0;
    button.addEventListener("click", async () => {
      try {
        await copyText(button.dataset.copy ?? "");
        button.classList.add("is-copied");
        if (label) label.textContent = "Adresse copiée";
      } catch {
        if (label) label.textContent = "Copie impossible, sélectionnez l’adresse";
      }
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        button.classList.remove("is-copied");
        if (label) label.textContent = initial;
      }, 2400);
    });
  });

  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  if (form) initForm(form);
}

const FIELDS = ["name", "email", "subject", "message"] as const;
type Field = (typeof FIELDS)[number];

/* Plus strict que le navigateur, qui accepte « nom@domaine » sans extension. */
const EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[^\s@.]{2,}$/;

function problem(name: Field, value: string) {
  switch (name) {
    case "name":
      if (!value) return "Indiquez votre nom.";
      return value.length < 2 ? "Votre nom doit compter au moins 2 caractères." : "";
    case "email":
      if (!value) return "Indiquez votre adresse e-mail.";
      return EMAIL.test(value) ? "" : "Cette adresse e-mail semble incorrecte (exemple\u00a0: prenom.nom@domaine.fr).";
    case "subject":
      return value ? "" : "Indiquez l’objet de votre message.";
    case "message":
      if (!value) return "Écrivez votre message.";
      return value.length < 10 ? "Votre message doit compter au moins 10 caractères." : "";
  }
}

/* Un robot remplit et envoie en un instant ; un visiteur met plus de 3 s. */
const MIN_FILL_MS = 3000;
const TIMEOUT_MS = 15000;

function initForm(form: HTMLFormElement) {
  // Avec JavaScript, les messages d'erreur s'affichent sous les champs.
  form.noValidate = true;
  const recipient = form.dataset.recipient ?? "";
  const status = form.querySelector<HTMLElement>("[data-form-status]");
  const statusText = form.querySelector<HTMLElement>("[data-form-status-text]");
  const submit = form.querySelector<HTMLButtonElement>("button[type=submit]");
  const submitLabel = form.querySelector<HTMLElement>("[data-submit-label]");
  const copyButton = form.querySelector<HTMLButtonElement>("[data-draft-copy]");
  const initialLabel = submitLabel?.textContent ?? "";
  const input = (name: string) => form.elements.namedItem(name) as HTMLInputElement | null;
  const value = (name: string) => input(name)?.value.trim() ?? "";
  let firstTouch = 0;
  let sending = false;
  let draft = "";

  const say = (tone: "success" | "error" | "", text: string) => {
    if (!status || !statusText) return;
    if (tone) status.dataset.tone = tone;
    else delete status.dataset.tone;
    statusText.textContent = text;
  };

  const check = (name: Field) => {
    const field = input(name);
    if (!field) return true;
    const message = problem(name, value(name));
    const error = form.querySelector<HTMLElement>(`#${field.id}-error`);
    if (error) error.textContent = message;
    if (message) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
    return !message;
  };

  form.addEventListener("focusin", () => {
    firstTouch ||= performance.now();
  });

  // Un champ signalé se corrige à mesure qu'on tape.
  form.addEventListener("input", (event) => {
    const field = event.target as HTMLInputElement;
    if (field.getAttribute("aria-invalid") === "true") check(field.name as Field);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending) return;
    const invalid = FIELDS.filter((name) => !check(name));
    if (invalid.length) {
      say("", "");
      input(invalid[0])?.focus();
      return;
    }

    // Le piège est coché : un robot. On fait comme si de rien n'était.
    if (input("botcheck")?.checked) {
      form.reset();
      say("success", "Message envoyé. Merci, je vous réponds rapidement.");
      return;
    }
    if (!firstTouch || performance.now() - firstTouch < MIN_FILL_MS) {
      say("error", "Le message n’est pas parti. Réessayez dans quelques secondes.");
      return;
    }

    draft = `À : ${recipient}\nObjet : ${value("subject")}\n\n${value("message")}`;
    if (!navigator.onLine) {
      fail("Vous semblez hors connexion. Vérifiez votre réseau, puis réessayez.");
      return;
    }

    sending = true;
    form.setAttribute("aria-busy", "true");
    submit?.setAttribute("aria-disabled", "true");
    if (submitLabel) submitLabel.textContent = "Envoi en cours…";
    say("", "");
    if (copyButton) copyButton.hidden = true;

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      /* Le nom et l'adresse du visiteur vont dans des lignes à part, jamais dans
         son message ; l'adresse sert aussi de « Répondre à ». Envoyé en
         FormData : le navigateur n'a pas de requête de contrôle (CORS) à faire. */
      const body = new FormData();
      body.append("access_key", value("access_key"));
      body.append("subject", value("subject"));
      body.append("from_name", `${value("name")} · portfolio`);
      body.append("replyto", value("email"));
      body.append("Nom", value("name"));
      body.append("E-mail", value("email"));
      body.append("Message", value("message"));
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
        signal: controller.signal,
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean } | null;
      if (response.ok && result?.success) {
        form.reset();
        firstTouch = 0;
        draft = "";
        say("success", "Message envoyé. Merci, je vous réponds rapidement à l’adresse indiquée.");
      } else if (response.status === 429) {
        fail(`Trop d’envois en peu de temps. Réessayez dans une heure, ou écrivez-moi à ${recipient}.`);
      } else {
        fail(`L’envoi n’a pas abouti. Réessayez dans un instant, ou écrivez-moi à ${recipient}.`);
      }
    } catch {
      fail(`L’envoi n’a pas abouti : la connexion a échoué. Réessayez, ou écrivez-moi à ${recipient}.`);
    } finally {
      window.clearTimeout(timer);
      sending = false;
      form.removeAttribute("aria-busy");
      submit?.removeAttribute("aria-disabled");
      if (submitLabel) submitLabel.textContent = initialLabel;
    }
  });

  // Le message reste dans le formulaire ; le bouton aide à l'envoyer autrement.
  function fail(text: string) {
    say("error", text);
    if (copyButton) copyButton.hidden = false;
  }

  copyButton?.addEventListener("click", async () => {
    if (!draft) return;
    try {
      await copyText(draft);
      say("success", "Message copié : collez-le dans un nouvel e-mail.");
    } catch {
      say("error", `Copie impossible. Écrivez-moi directement à ${recipient}.`);
    }
  });
}
