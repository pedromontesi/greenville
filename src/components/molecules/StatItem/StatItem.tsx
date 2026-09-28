import { AnimatedNumber } from "../../atoms";
import styles from "./StatItem.module.scss";

type StatItemProps = {
  target: number;
  label: string;
  start: boolean;
  /** Desce o item no desktop para criar o efeito de "degrau". */
  offset?: boolean;
};

export const StatItem = ({ target, label, start, offset = false }: StatItemProps) => (
  <div className={offset ? styles.offset : undefined}>
    <b>
      <AnimatedNumber target={target} start={start} />
    </b>
    <p>{label}</p>
  </div>
);
