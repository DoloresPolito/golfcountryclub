"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useSyncExternalStore } from "react";

// Scroll suave con Lenis. `lerp` controla cuánto se desliza al soltar la
// rueda: más bajo = más efecto (el default de Lenis es 0.1).
// En touch se deja el scroll nativo del celular.
const OPTIONS = {
  lerp: 0.07,
  wheelMultiplier: 1,
  smoothWheel: true,
  anchors: true,
};

const reducedMotion = "(prefers-reduced-motion: reduce)";
const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(reducedMotion);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

export default function SmoothScroll() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(reducedMotion).matches,
    () => true,
  );

  if (prefersReducedMotion) return null;
  return <ReactLenis root options={OPTIONS} />;
}
