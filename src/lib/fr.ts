/* Typographie française : espace insécable avant « : ; ! ? » et dans les
   guillemets ; un « · » ne commence jamais une ligne. */
export const fr = (text: string) => text.replace(/ ([:;!?»·])/g, "\u00a0$1").replace(/« /g, "«\u00a0");
