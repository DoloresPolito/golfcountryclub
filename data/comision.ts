// ==========================================================================
// Comisión directiva
//
// Cada grupo se muestra como un bloque en /comision. Los cargos van en el
// orden en que tienen que aparecer. Si un cargo lo ocupan varias personas
// (vocales, revisores de cuentas…), se repite el cargo en cada una.
// ==========================================================================

export type Integrante = {
  cargo: string;
  nombre: string;
};

export type GrupoComision = {
  titulo: string;
  integrantes: Integrante[];
};

export const PERIODO = "2026 – 2028"; // TODO: confirmar con el club

// TODO: reemplazar "A confirmar" con los nombres que pase el presidente
export const comision: GrupoComision[] = [
  {
    titulo: "Mesa directiva",
    integrantes: [
      { cargo: "Presidente", nombre: "A confirmar" },
      { cargo: "Vicepresidente", nombre: "A confirmar" },
      { cargo: "Secretario", nombre: "A confirmar" },
      { cargo: "Prosecretario", nombre: "A confirmar" },
      { cargo: "Tesorero", nombre: "A confirmar" },
      { cargo: "Protesorero", nombre: "A confirmar" },
    ],
  },
  {
    titulo: "Vocales",
    integrantes: [
      { cargo: "Vocal titular", nombre: "A confirmar" },
      { cargo: "Vocal titular", nombre: "A confirmar" },
      { cargo: "Vocal suplente", nombre: "A confirmar" },
      { cargo: "Vocal suplente", nombre: "A confirmar" },
    ],
  },
  {
    titulo: "Revisores de cuentas",
    integrantes: [
      { cargo: "Revisor de cuentas titular", nombre: "A confirmar" },
      { cargo: "Revisor de cuentas suplente", nombre: "A confirmar" },
    ],
  },
];
