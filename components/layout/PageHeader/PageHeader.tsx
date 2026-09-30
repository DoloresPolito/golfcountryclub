import Link from "next/link";
import type { ReactNode } from "react";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import RevealWords from "@/components/ui/RevealWords/RevealWords";
import styles from "./PageHeader.module.scss";

type Props = {
  eyebrow: ReactNode;
  title: string;
  children?: ReactNode;
  back?: { href: string; label: string };
};

// Encabezado de las páginas internas (va debajo de la navbar fija)
export default function PageHeader({ eyebrow, title, children, back }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {back && (
          <Link href={back.href} className={styles.back} data-reveal>
            <ArrowRight className={styles.backArrow} />
            {back.label}
          </Link>
        )}
        <p className={styles.eyebrow} data-reveal>
          {eyebrow}
        </p>
        <h1 className={styles.title} data-reveal="words">
          <RevealWords>{title}</RevealWords>
        </h1>
        {children && (
          <div className={styles.text} data-reveal>
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
