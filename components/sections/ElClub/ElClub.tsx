import Image from "next/image";
import RevealWords from "@/components/ui/RevealWords/RevealWords";
import { galeriaClub, type Foto } from "@/data/galeria";
import Carousel from "./Carousel";
import styles from "./ElClub.module.scss";

function Slide({ foto, hidden }: { foto: Foto; hidden?: boolean }) {
  return (
    <li className={styles.slide} aria-hidden={hidden || undefined}>
      <div className={styles.frame}>
        {foto.src && (
          <Image
            className={styles.photo}
            src={foto.src}
            alt={hidden ? "" : foto.alt}
            fill
            sizes="(max-width: 768px) 70vw, 25vw"
          />
        )}
      </div>
    </li>
  );
}

export default function ElClub() {
  return (
    <section id="el-club" className={styles.club}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow} data-reveal>
            <span>02</span>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span>El club</span>
          </p>
          <h2 className={styles.title} data-reveal="words">
            <RevealWords>
              Un club <br />
              para <span className={styles.accent}>encontrarse.</span>
            </RevealWords>
          </h2>
          <p className={styles.text} data-reveal>
            Golf, deportes, actividades para chicos, buena gastronomía y una
            comunidad que vive el club dentro y fuera de la cancha.
          </p>
        </div>

        <p className={styles.aside} data-reveal>
          Un entorno natural para disfrutar del deporte, la familia y los buenos
          momentos, todo el año.
        </p>
      </div>

      {/* Carrusel infinito: la lista va dos veces para que el loop no tenga cortes */}
      <Carousel count={galeriaClub.length}>
        {galeriaClub.map((foto, i) => (
          <Slide key={`a-${i}`} foto={foto} />
        ))}
        {galeriaClub.map((foto, i) => (
          <Slide key={`b-${i}`} foto={foto} hidden />
        ))}
      </Carousel>
    </section>
  );
}
