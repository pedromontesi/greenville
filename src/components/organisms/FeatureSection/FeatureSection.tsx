import { FeatureBlock } from "../../molecules";
import type { FeatureBlockProps } from "../../molecules";
import styles from "./FeatureSection.module.scss";

type FeatureSectionProps = {
  features: FeatureBlockProps[];
};

export const FeatureSection = ({ features }: FeatureSectionProps) => (
  <section>
    <main className={styles.container}>
      {features.map((feature) => (
        <FeatureBlock key={feature.title} {...feature} />
      ))}
    </main>
  </section>
);
