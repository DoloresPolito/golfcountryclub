"use client";

import { type ReactNode, useEffect, useRef } from "react";
import styles from "./ElClub.module.scss";

// Segundos que tarda cada foto en pasar (la vuelta completa dura count * esto)
const SEGUNDOS_POR_FOTO = 5;
// Cuánto frena el impulso al soltar después de arrastrar (por segundo)
const FRICCION = 0.004;

// Carrusel infinito que avanza solo, se frena con el mouse encima
// y se puede arrastrar (mouse, dedo o trackpad) para ir adelante o atrás.
// `children` tiene que traer la lista de fotos dos veces seguidas.
export default function Carousel({
  count,
  children,
}: {
  count: number;
  children: ReactNode;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let offset = 0;
    let velocity = 0; // impulso después de soltar, en px/s
    let hovered = false;
    let dragging = false;
    let lastX = 0;
    let lastTime = 0;
    let frame = 0;
    let prev = performance.now();

    // La pista tiene las fotos dos veces: al pasar la mitad vuelve al inicio
    const wrap = () => {
      const half = track.scrollWidth / 2;
      if (half > 0) offset = ((offset % half) + half) % half;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.1);
      prev = now;

      if (!dragging) {
        if (Math.abs(velocity) > 5) {
          offset += velocity * dt;
          velocity *= Math.pow(FRICCION, dt);
        } else {
          velocity = 0;
          if (!hovered && !reduceMotion) {
            const speed = track.scrollWidth / 2 / (count * SEGUNDOS_POR_FOTO);
            offset += speed * dt;
          }
        }
      }

      wrap();
      frame = requestAnimationFrame(tick);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true;
      velocity = 0;
      lastX = e.clientX;
      lastTime = e.timeStamp;
      carousel.setPointerCapture(e.pointerId);
      carousel.dataset.dragging = "";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dt = (e.timeStamp - lastTime) / 1000;
      offset -= dx;
      if (dt > 0) velocity = -dx / dt;
      lastX = e.clientX;
      lastTime = e.timeStamp;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      // Si se quedó quieto antes de soltar, no hay impulso
      if (e.timeStamp - lastTime > 80) velocity = 0;
      delete carousel.dataset.dragging;
    };

    // Trackpad / rueda horizontal; el scroll vertical sigue de largo
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      e.stopPropagation(); // que Lenis no lo tome como scroll de la página
      velocity = 0;
      offset += e.deltaX;
    };

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === "mouse") hovered = true;
    };
    const onLeave = () => {
      hovered = false;
    };

    carousel.addEventListener("pointerdown", onPointerDown);
    carousel.addEventListener("pointermove", onPointerMove);
    carousel.addEventListener("pointerup", onPointerUp);
    carousel.addEventListener("pointercancel", onPointerUp);
    carousel.addEventListener("pointerenter", onEnter);
    carousel.addEventListener("pointerleave", onLeave);
    carousel.addEventListener("wheel", onWheel, { passive: false });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      carousel.removeEventListener("pointerdown", onPointerDown);
      carousel.removeEventListener("pointermove", onPointerMove);
      carousel.removeEventListener("pointerup", onPointerUp);
      carousel.removeEventListener("pointercancel", onPointerUp);
      carousel.removeEventListener("pointerenter", onEnter);
      carousel.removeEventListener("pointerleave", onLeave);
      carousel.removeEventListener("wheel", onWheel);
    };
  }, [count]);

  return (
    <div ref={carouselRef} className={styles.carousel}>
      <ul ref={trackRef} className={styles.track} role="list">
        {children}
      </ul>
    </div>
  );
}
