"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Parallax de las fotos de fondo. A cada elemento con `data-parallax` le pasa
// `--parallax`: de -1 (la sección está entrando por abajo) a 1 (saliendo por
// arriba), 0 cuando está centrada. El desplazamiento lo arma el CSS
// (ver styles/base/_parallax.scss).
export default function Parallax() {
  // Se vuelve a correr al cambiar de página para tomar los elementos nuevos
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    ).map((el) => ({
      el,
      section: el.closest("section") ?? el.parentElement!,
    }));

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const { el, section } of items) {
        const rect = section.getBoundingClientRect();
        if (rect.bottom < -vh || rect.top > vh * 2) continue;
        const p =
          (vh / 2 - (rect.top + rect.height / 2)) / ((vh + rect.height) / 2);
        el.style.setProperty(
          "--parallax",
          Math.max(-1, Math.min(1, p)).toFixed(4),
        );
      }
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
  }, [pathname]);

  return null;
}
