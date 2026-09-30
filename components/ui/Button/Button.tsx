import Link from "next/link";
import type { ComponentProps } from "react";
import styles from "./Button.module.scss";

type Props = ComponentProps<typeof Link> & {
  variant?: "primary" | "outline" | "leaf" | "olive" | "moss" | "cream" | "gold";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <Link
      className={[styles.button, styles[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
