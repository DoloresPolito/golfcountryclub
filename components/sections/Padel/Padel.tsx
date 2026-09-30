import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import RevealWords from "@/components/ui/RevealWords/RevealWords";
import styles from "./Padel.module.scss";

export default function Padel() {
  return (
    <section id="padel" className={styles.padel}>
      <h2 className={styles.title} data-reveal="words">
        <RevealWords>Pádel en el club</RevealWords>
      </h2>

      <Image
        className={styles.ball}
        data-parallax="ball"
        src="/images/pelota.png"
        alt=""
        width={788}
        height={800}
        sizes="(max-width: 768px) 40vw, 14vw"
      />

      <p className={styles.text} data-reveal>
        Un espacio para disfrutar, compartir y jugar en un entorno natural.
        Reservá tu turno y vení a la cancha.
      </p>

      <Button
        href="#reservas"
        variant="olive"
        className={styles.button}
        data-reveal
      >
        Reservar turno
      </Button>
    </section>
  );
}
