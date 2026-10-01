import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import RevealWords from "@/components/ui/RevealWords/RevealWords";
import { whatsappUrl } from "@/data/contacto";
import styles from "./Quincho.module.scss";

const EVENTOS = [
  ["Cumpleaños"],
  ["Reuniones", "corporativas"],
  ["Eventos", "familiares"],
  ["Fiestas", "y más"],
];

export default function Quincho() {
  return (
    <section id="quincho" className={styles.quincho}>
      <Image
        className={styles.bg}
        data-parallax="bg"
        data-reveal="zoom"
        src="/images/quincho.png"
        alt=""
        fill
        sizes="100vw"
      />
      {/* Desenfoca el lado izquierdo de la foto para que se lea el texto */}
      <div className={styles.blur} aria-hidden="true" />

      <p className={styles.corner} aria-hidden="true">
        Golf Country Club
      </p>

      <div className={styles.inner}>
        <p className={styles.eyebrow} data-reveal>
          <span>08</span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span>Golf Country Club</span>
        </p>

        <h2 className={styles.title} data-reveal="words">
          <RevealWords>
            Quincho <br />y salón
          </RevealWords>
        </h2>

        <p className={styles.subtitle} data-reveal>
          Un entorno único <br />
          para tus eventos.
        </p>

        <p className={styles.text} data-reveal>
          Alquiler del quincho y salón para eventos sociales y corporativos, en
          un entorno natural y con todas las comodidades.
        </p>

        <ul className={styles.events} role="list">
          {EVENTOS.map((lineas) => (
            <li key={lineas.join(" ")} className={styles.event} data-reveal>
              {lineas.map((linea, i) => (
                <span key={i}>{linea}</span>
              ))}
            </li>
          ))}
        </ul>

        <Button
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          variant="moss"
          className={styles.button}
          data-reveal
        >
          Consultar por WhatsApp
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
