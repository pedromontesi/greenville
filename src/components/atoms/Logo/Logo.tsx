import logo from "/src/assets/svg/maple-logo.svg";
import styles from "./Logo.module.scss";

type LogoProps = {
  size?: "sm" | "lg";
};

export const Logo = ({ size = "sm" }: LogoProps) => (
  <img src={logo} alt="Logo Maple" className={styles[size]} />
);
