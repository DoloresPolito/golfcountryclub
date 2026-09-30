// TODO: reemplazar por el número real del club (solo dígitos, con código de país)
export const WHATSAPP_CLUB = "5490000000000";

export const whatsappUrl = (numero: string = WHATSAPP_CLUB) =>
  `https://wa.me/${numero.replace(/\D/g, "")}`;
