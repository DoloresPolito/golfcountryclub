"use client";

import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { SECCIONES as LINKS } from "@/data/navegacion";
import styles from "./Navbar.module.scss";

// "home": va debajo del hero y queda fija al llegar arriba.
// "page": páginas internas; fija desde el principio, sobre el encabezado.
export default function Navbar({
  variant = "home",
}: {
  variant?: "home" | "page";
}) {
  const ref = useRef<HTMLElement>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detecta cuando la barra llegó arriba y quedó fija (sticky)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const top = parseFloat(getComputedStyle(el).top) || 0;
      setIsStuck(el.getBoundingClientRect().top <= top + 1);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Con el menú abierto se frena el scroll de la página (y el de Lenis).
  // Se bloquea en <html> y no en <body>: si el body pasa a tener su propio
  // scroll, la barra sticky se va de la pantalla y desaparece la X.
  const lenis = useLenis();
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) lenis?.stop();
    else lenis?.start();
  }, [isOpen, lenis]);

  const close = () => setIsOpen(false);

  // El menú se abre desde el botón; como la barra puede estar abajo (sobre el
  // hero) o arriba (fija), se toma su posición real al momento de abrir.
  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const header = ref.current;
    if (!isOpen && header) {
      const btn = event.currentTarget.getBoundingClientRect();
      const bar = header.getBoundingClientRect();
      const barAtBottom = bar.top > window.innerHeight / 2;
      header.style.setProperty("--menu-x", `${btn.left + btn.width / 2}px`);
      header.style.setProperty("--menu-y", `${btn.top + btn.height / 2}px`);
      header.style.setProperty(
        "--menu-pt",
        barAtBottom ? "0px" : `${bar.bottom}px`,
      );
      header.style.setProperty(
        "--menu-pb",
        barAtBottom ? `${window.innerHeight - bar.top}px` : "0px",
      );
    }
    setIsOpen((open) => !open);
  };

  return (
    <header
      ref={ref}
      className={[styles.header, styles[variant], isStuck && styles.stuck]
        .filter(Boolean)
        .join(" ")}
    >
      <nav className={styles.bar} aria-label="Principal">
        <Link href="/" className={styles.brand} onClick={close}>
          <Image
            className={styles.logo}
            src="/images/logo.png"
            alt=""
            width={176}
            height={236}
            priority
          />
          <span className={styles.brandName}>Golf Country Club</span>
        </Link>

        <span className={styles.divider} aria-hidden="true" />

        <ul className={styles.links} role="list">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <span className={styles.divider} aria-hidden="true" />

        <Link href="/#reservas" className={styles.cta}>
          Book a tee time
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={toggle}
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={[styles.menu, isOpen && styles.menuOpen]
          .filter(Boolean)
          .join(" ")}
        inert={!isOpen}
        data-lenis-prevent
      >
        <ul role="list">
          {LINKS.map((link, i) => (
            <li key={link.href} style={{ "--i": i } as CSSProperties}>
              <Link href={link.href} onClick={close}>
                <span className={styles.menuIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.menuLabel}>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#reservas"
          className={styles.menuCta}
          style={{ "--i": LINKS.length } as CSSProperties}
          onClick={close}
        >
          Book a tee time
        </Link>
      </div>
    </header>
  );
}
