// WhatsApp de la administración del club (solo dígitos, con código de país)
export const WHATSAPP_CLUB = "5493446609377";

// `mensaje` deja el chat con un texto ya escrito, para que la consulta llegue
// con contexto
export const whatsappUrl = ({
  numero = WHATSAPP_CLUB,
  mensaje,
}: { numero?: string; mensaje?: string } = {}) => {
  const url = `https://wa.me/${numero.replace(/\D/g, "")}`;
  return mensaje ? `${url}?text=${encodeURIComponent(mensaje)}` : url;
};
