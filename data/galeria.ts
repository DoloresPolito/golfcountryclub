export type Foto = {
  src?: string; // ruta en /public/images; sin src se muestra un cuadrado de relleno
  alt: string;
};

// TODO: cargar las fotos reales del club
export const galeriaClub: Foto[] = [
  { alt: "Encuentro de socios en el quincho" },
  { alt: "Chico practicando su swing" },
  { alt: "Escuelita de golf" },
  { alt: "Jugadores recorriendo la cancha" },
  { alt: "Atardecer en la cancha" },
  { alt: "Torneo del club" },
];
