import { Logo } from "../../atoms";
import styles from "./Navbar.module.scss";

export const Navbar = () => (
  <nav className={styles.nav}>
    <Logo size="sm" />
  </nav>
);
