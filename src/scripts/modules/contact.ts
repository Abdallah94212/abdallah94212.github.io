/* Contact sans serveur : l'adresse se copie en un clic, et le formulaire
   prépare un e-mail dans la messagerie du visiteur. Rien n'est envoyé ni
   stocké par le site ; un texte à copier sert de solution de repli. */

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
  if (!form) return;
  const status = form.querySelector<HTMLElement>("[data-form-status]");
  const copyButton = form.querySelector<HTMLButtonElement>("[data-draft-copy]");
  const recipient = form.action.replace(/^mailto:/, "");
  let draft = "";

  form.addEventListener("input", (event) => {
    const field = event.target as HTMLInputElement;
    field.setCustomValidity?.("");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | null)?.value.trim() ?? "";
    ["name", "email", "subject", "message"].forEach((name) => {
      const field = form.elements.namedItem(name) as HTMLInputElement | null;
      field?.setCustomValidity(field.required && !value(name) ? "Ce champ est obligatoire." : "");
    });
    if (!form.reportValidity()) return;

    const body = `${value("message")}\n\n${value("name")}\n${value("email")}`;
    draft = `À : ${recipient}\nObjet : ${value("subject")}\n\n${body}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(value("subject"))}&body=${encodeURIComponent(body)}`;

    if (status) status.textContent = "Votre messagerie s’ouvre avec le message prêt à partir. Rien ne s’est ouvert ? Copiez le message.";
    if (copyButton) copyButton.hidden = false;
  });

  copyButton?.addEventListener("click", async () => {
    if (!draft) return;
    try {
      await copyText(draft);
      if (status) status.textContent = "Message copié : collez-le dans un nouvel e-mail.";
    } catch {
      if (status) status.textContent = `Copie impossible. Écrivez directement à ${recipient}.`;
    }
  });
}
