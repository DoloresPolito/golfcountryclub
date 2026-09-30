import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import FileIcon from "@/components/ui/Icons/FileIcon";
import WhatsApp from "@/components/ui/Icons/WhatsApp";
import RevealWords from "@/components/ui/RevealWords/RevealWords";
import { whatsappUrl } from "@/data/contacto";
import styles from "./Colonia.module.scss";

export default function Colonia() {
  return (
    <section id="colonia" className={styles.colonia}>
      <Image
        className={styles.bg}
        data-parallax="bg"
        data-reveal="zoom"
        src="/images/colonia.jpeg"
        alt=""
        fill
        sizes="100vw"
      />

      <div className={styles.inner}>
        <p className={styles.eyebrow} data-reveal>
          <span>07</span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span>Colonia de verano</span>
        </p>

        <h2 className={styles.title} data-reveal="words">
          <RevealWords>Colonia</RevealWords>
        </h2>

        <p className={styles.activities} data-reveal>
          Natación, golf, fútbol, padel, hockey, gimnasia, ritmos, juegos,
          actividades musicales, manuales y recreativas en un entorno natural.
        </p>

        <p className={styles.lead} data-reveal>
          A cargo de <strong>Stella Manzo.</strong>
        </p>
        <p className={styles.text} data-reveal>
          Contamos con seguro y guardavidas.
          <br />
          Niños de 4 años en adelante.
        </p>

        <div className={styles.actions} data-reveal>
          <Button
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="moss"
            className={styles.button}
          >
            <WhatsApp />
            <span className={styles.sep} aria-hidden="true" />
            Contactar por WhatsApp
            <ArrowRight />
          </Button>
          <Button href="#inscripcion" variant="cream" className={styles.button}>
            <FileIcon />
            <span className={styles.sep} aria-hidden="true" />
            Inscripción
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
