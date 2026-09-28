import { useHorizontalScrollPin } from "../../../hooks/useHorizontalScrollPin";
import { HeroSlide, IntroCard, Navbar } from "../../molecules";
import styles from "./Header.module.scss";

type HeaderProps = {
  photos: string[];
  introText: string;
  ctaLabel: string;
  ctaHref: string;
};

export const Header = ({ photos, introText, ctaLabel, ctaHref }: HeaderProps) => {
  const { pinRef, wrapperRef, trackRef } = useHorizontalScrollPin();

  return (
    <header>
      <Navbar />

      <div ref={pinRef} className={styles.showcase}>
        <div ref={wrapperRef} className={styles.wrapper}>
          <div ref={trackRef} className={styles.track}>
            {photos.map((src, i) => (
              <HeroSlide key={src} src={src} alt={`Fachada Risotto ${i + 1}`} />
            ))}
          </div>
        </div>

        <IntroCard text={introText} ctaLabel={ctaLabel} ctaHref={ctaHref} />
      </div>
    </header>
  );
};
