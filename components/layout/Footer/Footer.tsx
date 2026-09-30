import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import WhatsApp from "@/components/ui/Icons/WhatsApp";
import { whatsappUrl } from "@/data/contacto";
import { SECCIONES } from "@/data/navegacion";
import styles from "./Footer.module.scss";

const RESERVAS = [
  { href: "/#reservas", label: "Book a tee time" },
  { href: "/torneos", label: "Torneos de golf" },
  { href: "/#padel", label: "Turnos de pádel" },
  { href: "/#quincho", label: "Quincho y salón" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand} data-reveal>
          <Image
            className={styles.logo}
            src="/images/logo.png"
            alt=""
            width={176}
            height={236}
          />
          <p className={styles.tagline}>
            Deporte, naturaleza y comunidad, todo el año.
          </p>
        </div>

        <nav className={styles.col} aria-label="Secciones" data-reveal>
          <h2 className={styles.label}>Secciones</h2>
          <ul className={styles.list} role="list">
            {SECCIONES.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col} data-reveal>
          <h2 className={styles.label}>Reservas</h2>
          <ul className={styles.list} role="list">
            {RESERVAS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col} data-reveal>
          <h2 className={styles.label}>Contacto</h2>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            <WhatsApp />
            Escribinos por WhatsApp
            <ArrowRight className={styles.arrow} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Golf Country Club</p>
        <p>
          Sitio hecho por{" "}
          <a
            href="https://www.vintestudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.credit}
          >
            Vinte Studio
          </a>
        </p>
        <a href="#top" className={styles.backTop}>
          Volver arriba
          <ArrowRight className={styles.arrowUp} />
        </a>
      </div>
    </footer>
  );
}
