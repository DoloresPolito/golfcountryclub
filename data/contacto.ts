// WhatsApp de la administración del club (solo dígitos, con código de país)
export const WHATSAPP_CLUB = "5493446609377";

export const whatsappUrl = (numero: string = WHATSAPP_CLUB) =>
  `https://wa.me/${numero.replace(/\D/g, "")}`;
