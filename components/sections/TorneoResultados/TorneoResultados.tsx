import type { Categoria, Premio } from "@/data/torneos";
import styles from "./TorneoResultados.module.scss";

// Sin score = no completó la vuelta (LP en la planilla)
const valor = (n?: number) => (n === undefined ? "–" : n);

// Planilla completa: tiene ida, vuelta, gross… de cada jugador
const esPlanilla = (categoria: Categoria) =>
  categoria.jugadores.some((j) => j.gross !== undefined);

function Planilla({ categoria }: { categoria: Categoria }) {
  const podio = categoria.jugadores.filter((j) => j.gross).slice(0, 3);

  return (
    <div className={styles.categoria}>
      <h3 className={styles.categoriaTitle} data-reveal>
        {categoria.nombre}
      </h3>

      <ol className={styles.podio} role="list">
        {podio.map((j, i) => (
          <li key={j.jugador} className={styles.puesto} data-reveal>
            <span className={styles.puestoNum}>{i + 1}</span>
            <span className={styles.puestoName}>{j.jugador}</span>
            <span className={styles.puestoScore}>
              Neto {j.neto}
              {j.mp && ` · MP ${j.mp}`}
            </span>
          </li>
        ))}
      </ol>

      {/* En mobile la tabla se desliza de costado */}
      <div className={styles.tableWrap} data-reveal>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" className={styles.left}>
                Jugador
              </th>
              <th scope="col">Ida</th>
              <th scope="col">Vta</th>
              <th scope="col">Gross</th>
              <th scope="col">Hcp</th>
              <th scope="col">Neto</th>
              <th scope="col">MP</th>
            </tr>
          </thead>
          <tbody>
            {categoria.jugadores.map((j, i) => (
              <tr key={j.jugador} className={i < 3 ? styles.top : undefined}>
                <td>{i + 1}</td>
                <th scope="row" className={styles.left}>
                  {j.jugador}
                </th>
                <td>{valor(j.ida)}</td>
                <td>{valor(j.vuelta)}</td>
                <td>{valor(j.gross)}</td>
                <td>{valor(j.hcp)}</td>
                <td>{valor(j.neto)}</td>
                <td className={styles.mp}>{j.mp ?? "–"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Resumen: solo los primeros puestos con el neto
function Resumen({ categoria }: { categoria: Categoria }) {
  return (
    <div className={styles.resumen} data-reveal>
      <h3 className={styles.resumenTitle}>{categoria.nombre}</h3>
      <ol className={styles.resumenList} role="list">
        {categoria.jugadores.map((j, i) => (
          <li key={j.jugador} className={styles.resumenItem}>
            <span className={styles.resumenNum}>{i + 1}</span>
            <span className={styles.resumenName}>{j.jugador}</span>
            {j.neto !== undefined && (
              <span className={styles.resumenScore}>Neto {j.neto}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function TorneoResultados({
  resultados,
  premios,
}: {
  resultados: Categoria[];
  premios?: Premio[];
}) {
  // Agrupa las categorías por `grupo` (Caballeros, Damas…) respetando el orden
  const grupos = resultados.reduce<
    { grupo?: string; categorias: Categoria[] }[]
  >((acc, categoria) => {
    const ultimo = acc.at(-1);
    if (ultimo && ultimo.grupo === categoria.grupo) {
      ultimo.categorias.push(categoria);
    } else {
      acc.push({ grupo: categoria.grupo, categorias: [categoria] });
    }
    return acc;
  }, []);

  const hayLP = resultados.some((c) => c.jugadores.some((j) => j.mp === "LP"));

  return (
    <section className={styles.resultados}>
      <div className={styles.inner}>
        {grupos.map(({ grupo, categorias }) => (
          <div key={grupo ?? "general"} className={styles.grupo}>
            {grupo && (
              <h2 className={styles.grupoTitle} data-reveal>
                {grupo}
              </h2>
            )}
            {categorias.filter(esPlanilla).map((categoria) => (
              <Planilla key={categoria.nombre} categoria={categoria} />
            ))}
            {categorias.some((c) => !esPlanilla(c)) && (
              <div className={styles.resumenGrid}>
                {categorias
                  .filter((c) => !esPlanilla(c))
                  .map((categoria) => (
                    <Resumen key={categoria.nombre} categoria={categoria} />
                  ))}
              </div>
            )}
          </div>
        ))}

        {premios && premios.length > 0 && (
          <div className={styles.grupo}>
            <h2 className={styles.grupoTitle} data-reveal>
              Premios especiales
            </h2>
            <ul className={styles.premios} role="list">
              {premios.map((p) => (
                <li key={p.premio} className={styles.premio} data-reveal>
                  <span className={styles.premioLabel}>{p.premio}</span>
                  <span className={styles.premioName}>{p.jugador}</span>
                  {p.detalle && (
                    <span className={styles.premioDetalle}>{p.detalle}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {hayLP && (
          <p className={styles.note} data-reveal>
            LP: no completó la vuelta.
          </p>
        )}
      </div>
    </section>
  );
}
