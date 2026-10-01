import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import RevealWords from "@/components/ui/RevealWords/RevealWords";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media} data-parallax>
        <Image
          className={styles.bg}
          src="/images/hero.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title} data-reveal="words">
          <RevealWords>Golf Country Club</RevealWords>
        </h1>
        <div className={styles.actions} data-reveal>
          <Button href="#contacto">Quiero ser socio</Button>
          <Button href="#el-club" variant="outline">
            Conocé el club
          </Button>
        </div>
      </div>
    </section>
  );
}
