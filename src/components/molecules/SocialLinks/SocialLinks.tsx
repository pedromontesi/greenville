import { Icon } from "../../atoms";
import styles from "./SocialLinks.module.scss";

export type SocialItem = {
  icon: string;
  alt: string;
};

type SocialLinksProps = {
  items: SocialItem[];
};

export const SocialLinks = ({ items }: SocialLinksProps) => (
  <div className={styles.list}>
    {items.map((item) => (
      <Icon key={item.alt} src={item.icon} alt={item.alt} />
    ))}
  </div>
);
