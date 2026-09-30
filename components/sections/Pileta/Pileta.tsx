import Image from "next/image";
import RevealWords from "@/components/ui/RevealWords/RevealWords";
import styles from "./Pileta.module.scss";

export default function Pileta() {
  return (
    <section id="pileta" className={styles.pileta}>
      <Image
        className={styles.bg}
        data-parallax="bg"
        data-reveal="zoom"
        src="/images/pileta.png"
        alt=""
        fill
        sizes="100vw"
      />
      {/* Desenfoca el lado izquierdo de la foto para que se lea el texto */}
      <div className={styles.blur} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.eyebrow} data-reveal>
          <span>05</span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span>La pileta</span>
        </p>

        <h2 className={styles.title} data-reveal="words">
          <RevealWords>
            Pileta <br />
            de verano.
          </RevealWords>
        </h2>

        <p className={styles.text} data-reveal>
          Guardavidas, entorno natural y un espacio ideal para disfrutar en
          familia.
        </p>

        <dl className={styles.info}>
          <div className={styles.item} data-reveal>
            <dt className={styles.tag}>Apertura</dt>
            <dd className={styles.value}>15 de noviembre</dd>
          </div>
          <div className={styles.item} data-reveal>
            <dt className={styles.tag}>Guardavidas</dt>
            <dd className={styles.value}>de 15:30 a 20 hs</dd>
          </div>
          <div className={styles.item} data-reveal>
            <dt className={styles.tag}>Valor</dt>
            <dd className={styles.value}>
              <strong>Socios gratis</strong>
              <span>Invitados adultos: $2000</span>
              <span>Invitados menores: $1000</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
