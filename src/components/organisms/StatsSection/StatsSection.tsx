import { useInView } from "../../../hooks/useInView";
import { StatItem } from "../../molecules";
import styles from "./StatsSection.module.scss";

export type Stat = {
  target: number;
  label: string;
  offset?: boolean;
};

type StatsSectionProps = {
  stats: Stat[];
};

export const StatsSection = ({ stats }: StatsSectionProps) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.stats}>
        {stats.map((stat) => (
          <StatItem key={stat.label} start={inView} {...stat} />
        ))}
      </div>
    </div>
  );
};
