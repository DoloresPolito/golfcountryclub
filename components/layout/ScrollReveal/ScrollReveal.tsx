"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Muestra los elementos con `data-reveal` cuando entran en pantalla.
// Los que entran juntos (ej. al llegar a una sección) se escalonan en el
// orden en que aparecen en el DOM. Los estilos están en styles/base/_reveal.scss.
const STAGGER_MS = 100;

export default function ScrollReveal() {
  // Se vuelve a correr al cambiar de página para tomar los elementos nuevos
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("reveal")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            el.style.setProperty("--reveal-delay", `${i * STAGGER_MS}ms`);
            el.classList.add("is-revealed");
            observer.unobserve(el);
          });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    document
      .querySelectorAll("[data-reveal]:not(.is-revealed)")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
