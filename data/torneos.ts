// ==========================================================================
// Calendario de torneos y resultados
//
// Cuando termina un torneo, se cargan en `resultados`: una entrada por
// categoría, con los jugadores en el mismo orden que la planilla (ese orden
// ya resuelve los desempates). Sirve tanto la planilla completa (con ida,
// vuelta, gross…) como un resumen con solo los primeros puestos y el neto.
// Los premios especiales (approach, long drive…) van en `premios`.
// ==========================================================================

export type Jugador = {
  jugador: string;
  ida?: number; // sin ida/vuelta = no completó la tarjeta
  vuelta?: number;
  gross?: number;
  hcp?: number;
  neto?: number;
  mp?: string; // columna MP de la planilla ("-2", "E", "5", "LP"…)
};

export type Categoria = {
  grupo?: string; // ej. "Caballeros" (las categorías se agrupan por esto)
  nombre: string; // ej. "Hándicap 0 a 18"
  jugadores: Jugador[];
};

export type Premio = {
  premio: string; // ej. "Approach caballeros"
  jugador: string;
  detalle?: string; // ej. "2,67 m"
};

export type Torneo = {
  slug: string;
  nombre: string;
  fecha: string; // ISO: AAAA-MM-DD
  modalidad?: string;
  hoyos?: number;
  resultados?: Categoria[];
  premios?: Premio[];
};

export const TEMPORADA = 2026;

export const torneos: Torneo[] = [
  { slug: "torneo-apertura", nombre: "Torneo Apertura", fecha: "2026-03-14" },
  {
    slug: "torneo-semana-santa",
    nombre: "Torneo Semana Santa",
    fecha: "2026-04-04",
    hoyos: 18,
    resultados: [
      {
        nombre: "Hándicap 0 a 18",
        // prettier-ignore
        jugadores: [
          { jugador: "Zas Fabio Ignacio", ida: 41, vuelta: 39, gross: 80, hcp: 11, neto: 69, mp: "-2" },
          { jugador: "Maya Antonio Martín", ida: 41, vuelta: 39, gross: 80, hcp: 11, neto: 69, mp: "-2" },
          { jugador: "Janza Jorge Luis", ida: 39, vuelta: 42, gross: 81, hcp: 10, neto: 71, mp: "E" },
          { jugador: "De Zan Juan José", ida: 43, vuelta: 42, gross: 85, hcp: 13, neto: 72, mp: "1" },
          { jugador: "Maya Manuel Enrique", ida: 41, vuelta: 37, gross: 78, hcp: 5, neto: 73, mp: "2" },
          { jugador: "Bertora Juan Fernando", ida: 42, vuelta: 37, gross: 79, hcp: 17, neto: 62, mp: "2" },
          { jugador: "Campi Marco", ida: 48, vuelta: 42, gross: 90, hcp: 16, neto: 74, mp: "3" },
          { jugador: "Schultheis Silvina Beatriz", ida: 46, vuelta: 44, gross: 90, hcp: 16, neto: 74, mp: "3" },
          { jugador: "Berasategui Facundo", ida: 43, vuelta: 44, gross: 87, hcp: 11, neto: 76, mp: "5" },
          { jugador: "Hernández Francisco Gustavo", ida: 45, vuelta: 43, gross: 88, hcp: 12, neto: 76, mp: "5" },
          { jugador: "Silveyra Fernando", ida: 41, vuelta: 48, gross: 89, hcp: 13, neto: 76, mp: "5" },
          { jugador: "Rojas Juan Ignacio", ida: 46, vuelta: 43, gross: 89, hcp: 10, neto: 79, mp: "8" },
          { jugador: "Kneeteman Maximiliano", ida: 27, vuelta: 44, gross: 71, hcp: 14, neto: 57, mp: "9" },
          { jugador: "Fay Edgardo", ida: 49, vuelta: 48, gross: 97, hcp: 16, neto: 81, mp: "10" },
          { jugador: "Ysrraelit Alejandro", ida: 58, vuelta: 52, gross: 110, hcp: 15, neto: 95, mp: "24" },
          { jugador: "Andrade Abel Marcelo", hcp: 14, mp: "LP" },
        ],
      },
      {
        nombre: "Hándicap 19 a 54",
        // prettier-ignore
        jugadores: [
          { jugador: "Bouzon Javier", ida: 55, vuelta: 45, gross: 100, hcp: 28, neto: 72, mp: "1" },
          { jugador: "Aguiar Armando Raúl", ida: 53, vuelta: 47, gross: 100, hcp: 28, neto: 72, mp: "1" },
          { jugador: "Olloquiegui Manuel Ignacio", ida: 42, vuelta: 43, gross: 85, hcp: 23, neto: 62, mp: "3" },
          { jugador: "Jorge Daniel Montiel Ordenavia", ida: 27, vuelta: 57, gross: 84, hcp: 30, neto: 54, mp: "11" },
          { jugador: "Giménez Mirta Mariel", ida: 53, vuelta: 61, gross: 114, hcp: 29, neto: 85, mp: "14" },
          { jugador: "Berasategui Juan Marcos", hcp: 24, mp: "LP" },
          { jugador: "Furman Marcela", hcp: 24, mp: "LP" },
        ],
      },
    ],
  },
  { slug: "copa-galicia", nombre: "Copa Galicia", fecha: "2026-04-25" },
  { slug: "torneo-banderita", nombre: "Torneo Banderita", fecha: "2026-06-20" },
  {
    slug: "copa-bolacua",
    nombre: "Copa Bolacuá",
    fecha: "2026-08-22",
    resultados: [
      {
        grupo: "Caballeros",
        nombre: "Hándicap 25 a 54",
        jugadores: [
          { jugador: "Bouzon Javier", neto: 70 },
          { jugador: "Berazategui Marcos", neto: 72 },
        ],
      },
      {
        grupo: "Caballeros",
        nombre: "Hándicap 17 a 24",
        jugadores: [
          { jugador: "Anzulovich Marcos", neto: 71 },
          { jugador: "Bologna Juan", neto: 76 },
        ],
      },
      {
        grupo: "Caballeros",
        nombre: "Hándicap 10 a 16",
        jugadores: [
          { jugador: "Silveyra Fernando", neto: 69 },
          { jugador: "Nemec Carlos", neto: 72 },
        ],
      },
      {
        grupo: "Caballeros",
        nombre: "Hándicap 0 a 9",
        jugadores: [
          { jugador: "Irigoitia Isaías", neto: 72 },
          { jugador: "Di Sabatto Roberto", neto: 74 },
        ],
      },
      {
        grupo: "Damas",
        nombre: "Hándicap 0 a 54",
        jugadores: [
          { jugador: "Schultheis Silvina", neto: 79 },
          { jugador: "Suárez María Emilia", neto: 85 },
        ],
      },
    ],
    premios: [
      {
        premio: "Approach caballeros",
        jugador: "Casarotto Joaquín",
        detalle: "0,80 m",
      },
      { premio: "Approach damas", jugador: "Schultheis Silvina" },
      { premio: "Long drive caballeros", jugador: "Casarotto Joaquín" },
      { premio: "Long drive damas", jugador: "Suárez María Emilia" },
    ],
  },
  { slug: "federativo-gchu", nombre: "Federativo GCHÚ", fecha: "2026-09-05" },
  {
    slug: "copa-lartirigoyen",
    nombre: "Copa Lartirigoyen",
    fecha: "2026-09-19",
    resultados: [
      {
        grupo: "Caballeros",
        nombre: "Hándicap 25 a 54",
        jugadores: [
          { jugador: "Limba Pablo Alexis", neto: 69 },
          { jugador: "Alazard Gerónimo", neto: 71 },
        ],
      },
      {
        grupo: "Caballeros",
        nombre: "Hándicap 17 a 24",
        jugadores: [
          { jugador: "Yurrebaso Matías Otmar", neto: 69 },
          { jugador: "Cafferata Maximiliano", neto: 71 },
        ],
      },
      {
        grupo: "Caballeros",
        nombre: "Hándicap 10 a 16",
        jugadores: [
          { jugador: "Gotusso Lisandro", neto: 67 },
          { jugador: "Janza Jorge Luis", neto: 71 },
        ],
      },
      {
        grupo: "Caballeros",
        nombre: "Hándicap 0 a 9",
        jugadores: [
          { jugador: "Escuder Francisco", neto: 68 },
          { jugador: "Maya Antonio Martín", neto: 69 },
        ],
      },
      {
        grupo: "Damas",
        nombre: "Hándicap 0 a 54",
        jugadores: [
          { jugador: "Suárez María Emilia", neto: 66 },
          { jugador: "Boari Ángela", neto: 67 },
        ],
      },
    ],
    premios: [
      {
        premio: "Approach caballeros",
        jugador: "Trigal Agustín",
        detalle: "2,67 m",
      },
      {
        premio: "Approach damas",
        jugador: "Suárez María Emilia",
        detalle: "2,5 m",
      },
      { premio: "Long drive caballeros", jugador: "Moresco Matías" },
      { premio: "Long drive damas", jugador: "Schultheis Silvina" },
    ],
  },
  {
    slug: "torneo-beneficio-conin",
    nombre: "Torneo a beneficio de CONIN Promover GCHÚ",
    fecha: "2026-10-10",
  },
  {
    slug: "copa-nandubay",
    nombre: "Copa Ñandubay",
    fecha: "2026-10-31",
    hoyos: 18,
  },
  {
    slug: "torneo-clausura",
    nombre: "Torneo Clausura",
    fecha: "2026-12-12",
    hoyos: 18,
  },
];

// Fecha de hoy en Argentina, en formato AAAA-MM-DD
const hoyIso = (hoy = new Date()) =>
  hoy.toLocaleDateString("en-CA", {
    timeZone: "America/Argentina/Buenos_Aires",
  });

// Un torneo cuenta como jugado recién al día siguiente
export const yaSeJugo = (torneo: Torneo, hoy?: Date) =>
  torneo.fecha < hoyIso(hoy);

// Los torneos que todavía no se jugaron (incluye los de hoy)
export const getProximosTorneos = (cantidad = 3, hoy?: Date) =>
  torneos.filter((torneo) => !yaSeJugo(torneo, hoy)).slice(0, cantidad);

export const getTorneo = (slug: string) =>
  torneos.find((torneo) => torneo.slug === slug);

export const formatFecha = (iso: string) => {
  const fecha = new Date(`${iso}T12:00:00`);
  const parte = (opts: Intl.DateTimeFormatOptions) =>
    fecha.toLocaleDateString("es-AR", opts).replace(".", "");
  return {
    mes: parte({ month: "short" }),
    dia: parte({ day: "2-digit" }),
    semana: parte({ weekday: "short" }),
    completa: parte({ weekday: "long", day: "numeric", month: "long" }),
  };
};
