import Link from "next/link";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import { formatFecha, torneos, yaSeJugo, type Torneo } from "@/data/torneos";
import styles from "./Torneos.module.scss";

function Fila({ torneo, jugado }: { torneo: Torneo; jugado: boolean }) {
  const { mes, dia, semana } = formatFecha(torneo.fecha);
  const resultados = torneo.resultados;

  return (
    <li id={torneo.slug} className={styles.item} data-reveal>
      <time className={styles.date} dateTime={torneo.fecha}>
        <span>{mes}</span>
        <span className={styles.day}>{dia}</span>
        <span>{semana}</span>
      </time>

      <div className={styles.info}>
        <h3 className={styles.name}>{torneo.nombre}</h3>
        {torneo.hoyos && <p className={styles.meta}>{torneo.hoyos} hoyos</p>}

        {/* Ganador de cada categoría */}
        {resultados && (
          <dl className={styles.winners}>
            {resultados.map((categoria) => {
              const ganador = categoria.jugadores[0];
              return (
                <div
                  key={`${categoria.grupo}-${categoria.nombre}`}
                  className={styles.winner}
                >
                  <dt>
                    {[categoria.grupo, categoria.nombre]
                      .filter(Boolean)
                      .join(" · ")}
                  </dt>
                  <dd>
                    {ganador.jugador}
                    {ganador.neto !== undefined && (
                      <span className={styles.score}>Neto {ganador.neto}</span>
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        )}
      </div>

      <div className={styles.action}>
        {resultados ? (
          <Link href={`/torneos/${torneo.slug}`} className={styles.link}>
            Ver resultados <ArrowRight />
          </Link>
        ) : (
          <span className={styles.tag}>
            {jugado ? "Resultados próximamente" : "Próximo"}
          </span>
        )}
      </div>
    </li>
  );
}

export default function Torneos() {
  const proximos = torneos.filter((torneo) => !yaSeJugo(torneo));
  // Los jugados, del más reciente al más viejo
  const jugados = torneos.filter((torneo) => yaSeJugo(torneo)).reverse();

  return (
    <section className={styles.torneos}>
      <div className={styles.inner}>
        {proximos.length > 0 && (
          <div className={styles.group}>
            <h2 className={styles.groupTitle} data-reveal>
              Próximos
              <span className={styles.count}>{proximos.length}</span>
            </h2>
            <ul className={styles.list} role="list">
              {proximos.map((torneo) => (
                <Fila key={torneo.slug} torneo={torneo} jugado={false} />
              ))}
            </ul>
          </div>
        )}

        {jugados.length > 0 && (
          <div className={styles.group}>
            <h2 className={styles.groupTitle} data-reveal>
              Jugados
              <span className={styles.count}>{jugados.length}</span>
            </h2>
            <ul className={styles.list} role="list">
              {jugados.map((torneo) => (
                <Fila key={torneo.slug} torneo={torneo} jugado />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
