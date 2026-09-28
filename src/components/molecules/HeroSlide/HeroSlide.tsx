import styles from "./HeroSlide.module.scss";

type HeroSlideProps = {
  src: string;
  alt: string;
};

export const HeroSlide = ({ src, alt }: HeroSlideProps) => (
  <div className={styles.item}>
    <img className={styles.image} src={src} alt={alt} />
  </div>
);
