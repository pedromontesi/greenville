import styles from "./Photo.module.scss";

type PhotoProps = {
  src: string;
  alt: string;
};

export const Photo = ({ src, alt }: PhotoProps) => (
  <img className={styles.photo} src={src} alt={alt} />
);
