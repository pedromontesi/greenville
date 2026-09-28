import { Button } from "../../atoms";
import styles from "./IntroCard.module.scss";

type IntroCardProps = {
  text: string;
  ctaLabel: string;
  ctaHref: string;
};

export const IntroCard = ({ text, ctaLabel, ctaHref }: IntroCardProps) => (
  <div className={styles.card}>
    <p>{text}</p>
    <Button href={ctaHref}>{ctaLabel}</Button>
  </div>
);
