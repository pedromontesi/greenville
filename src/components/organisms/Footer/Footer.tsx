import { Logo } from "../../atoms";
import { SocialLinks } from "../../molecules";
import type { SocialItem } from "../../molecules";
import styles from "./Footer.module.scss";

type FooterProps = {
  title: string;
  address: string;
  socials: SocialItem[];
};

export const Footer = ({ title, address, socials }: FooterProps) => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <h1>{title}</h1>
      <SocialLinks items={socials} />
      <p>{address}</p>
    </div>
    <div className={styles.logoBox}>
      <Logo size="lg" />
    </div>
  </footer>
);
