import type { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  href: string;
  children: ReactNode;
};

export const Button = ({ href, children }: ButtonProps) => (
  <a href={href} className={styles.button}>
    {children}
  </a>
);
