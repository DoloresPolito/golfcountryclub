import Button from "@/components/ui/Button/Button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import WhatsApp from "@/components/ui/Icons/WhatsApp";
import RevealWords from "@/components/ui/RevealWords/RevealWords";
import { whatsappUrl } from "@/data/contacto";
import styles from "./Socios.module.scss";

export default function Socios() {
  return (
    <section id="contacto" className={styles.socios}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow} data-reveal>
            Golf Country Club
          </p>
          <h2 className={styles.title} data-reveal="words">
            <RevealWords>
              ¿Querés ser <br />
              parte del club?
            </RevealWords>
          </h2>
        </div>

        <span className={styles.divider} aria-hidden="true" />

        <p className={styles.text} data-reveal>
          Escribinos por WhatsApp y conocé todas las propuestas, actividades y
          beneficios.
        </p>

        <Button
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          variant="moss"
          className={styles.button}
          data-reveal
        >
          <WhatsApp />
          <span className={styles.sep} aria-hidden="true" />
          Hablar por WhatsApp
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
