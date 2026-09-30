import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import RevealWords from "@/components/ui/RevealWords/RevealWords";
import { formatFecha, getProximosTorneos } from "@/data/torneos";
import styles from "./Golf.module.scss";

export default function Golf() {
  const proximosTorneos = getProximosTorneos();

  return (
    <section id="golf" className={styles.golf}>
      <Image
        className={styles.bg}
        data-parallax="bg"
        data-reveal="zoom"
        src="/images/golf.jpeg"
        alt=""
        fill
        sizes="100vw"
      />

      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow} data-reveal>
            Golf
          </p>
          <h2 className={styles.title} data-reveal="words">
            <RevealWords>
              Golf en <br />
              naturaleza <br />
              pura
            </RevealWords>
          </h2>
          <p className={styles.text} data-reveal>
            Una cancha que combina desafío, entorno natural y camaradería.
            Torneos, salidas, clínicas y actividades para todas las edades y
            niveles.
          </p>
          <Button
            href="/torneos"
            variant="leaf"
            className={styles.button}
            data-reveal
          >
            Torneos y resultados <ArrowRight />
          </Button>
        </div>

        <span className={styles.divider} aria-hidden="true" />

        <div className={styles.agenda}>
          <div className={styles.agendaHead} data-reveal>
            <h3 className={styles.agendaTitle}>Próximos torneos</h3>
            <Link href="/torneos" className={styles.agendaLink}>
              Ver agenda completa <ArrowRight />
            </Link>
          </div>

          {proximosTorneos.length === 0 && (
            <p className={styles.empty} data-reveal>
              Pronto vamos a publicar el calendario de la próxima temporada.
            </p>
          )}

          <ul className={styles.list} role="list">
            {proximosTorneos.map((torneo) => {
              const { mes, dia, semana } = formatFecha(torneo.fecha);
              return (
                <li key={torneo.slug} className={styles.item} data-reveal>
                  <time className={styles.date} dateTime={torneo.fecha}>
                    <span className={styles.month}>{mes}</span>
                    <span className={styles.day}>{dia}</span>
                    <span className={styles.weekday}>{semana}</span>
                  </time>
                  <div className={styles.info}>
                    <h4 className={styles.name}>{torneo.nombre}</h4>
                    {(torneo.modalidad || torneo.hoyos) && (
                      <p className={styles.meta}>
                        {torneo.modalidad}
                        {torneo.modalidad && torneo.hoyos && <br />}
                        {torneo.hoyos && `${torneo.hoyos} hoyos`}
                      </p>
                    )}
                  </div>
                  <Link
                    href={`/torneos#${torneo.slug}`}
                    className={styles.more}
                    aria-label={`Ver ${torneo.nombre}`}
                  >
                    <ArrowRight />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
