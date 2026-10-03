import Button from "@/components/ui/Button/Button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Clock from "@/components/ui/Icons/Clock";
import RevealWords from "@/components/ui/RevealWords/RevealWords";
import { whatsappUrl } from "@/data/contacto";
import styles from "./Brooklyn.module.scss";

const TELEFONO = "+54 9 3446 52-5335";

const HORARIOS = [
  { dia: "Lunes y martes", horario: "11:30 – 14:00 y 17:30 – 22:00" },
  { dia: "Miércoles", horario: "Cerrado" },
  { dia: "Jueves y viernes", horario: "11:30 – 14:00 y 17:30 – 22:00" },
  { dia: "Sábado", horario: "11:30 – 22:00" },
  { dia: "Domingo", horario: "Desde la tarde hasta las 22:00" },
];

export default function Brooklyn() {
  return (
    <section id="brooklyn" className={styles.brooklyn}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.eyebrow} data-reveal>
            Resto bar
            <span className={styles.dot} aria-hidden="true" />
            Golf Country Club
          </p>
          <h2 className={styles.title} data-reveal="words">
            <RevealWords>Brooklyn</RevealWords>
          </h2>
        </div>

        <p className={styles.tagline} data-reveal>
          Un lugar para comer, tomar algo y quedarse un rato más.
        </p>

        <div className={styles.detail} data-reveal>
          <Clock className={styles.icon} />
          <div>
            <h3 className={styles.label}>Horarios</h3>
            <dl className={styles.value}>
              {HORARIOS.map(({ dia, horario }) => (
                <div key={dia} className={styles.row}>
                  <dt>{dia}</dt>
                  <dd>{horario}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div data-reveal>
          <Button
            href={whatsappUrl({
              numero: TELEFONO,
              mensaje:
                "Hola, quisiera hacer una reserva o un pedido para llevar.",
            })}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            className={styles.button}
            aria-label={`Reservas y take away por WhatsApp al ${TELEFONO}`}
          >
            Reservas y take away
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
