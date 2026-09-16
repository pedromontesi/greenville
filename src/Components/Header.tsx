import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "/src/assets/svg/maple-logo.svg";
import headerPhoto from "/src/assets/img/header-photo.jpg";
import styles from "./Header.module.scss";

gsap.registerPlugin(ScrollTrigger);

// Fotos de exemplo do hero banner.
// A primeira é a foto local do projeto; as demais são fotos de exemplo
// puxadas do Unsplash (Unsplash License — uso livre, sem custo).
const heroPhotos = [
  headerPhoto,
  "https://images.unsplash.com/photo-1756668765680-80c792ff1238?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536663488274-baee3471fc69?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1731223835878-adb504835539?w=1920&q=80&auto=format&fit=crop",
];

const Header = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = imageRefs.current.filter(Boolean) as HTMLImageElement[];
      if (images.length < 2) return;

      // Slider controlado pelo scroll: a seção fica "travada" (pin) na tela
      // enquanto as imagens fazem crossfade em sequência; só libera o
      // scroll da página quando o slide termina.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${(images.length - 1) * window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      images.forEach((img, i) => {
        if (i === 0) return;
        tl.fromTo(
          img,
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, ease: "none", duration: 1 },
          i - 1
        );
      });
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="Logo Maple" className={styles.logo} />
        {/* <ul className={styles.navList}>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Preço</a></li>
          <li><a href="#">Galeria</a></li>
        </ul> */}
      </nav>

    <div ref={pinRef} className={styles.showcaseCointainer}>
      <div ref={sliderRef} className={styles.imageWrapper}>
        {heroPhotos.map((src, i) => (
          <img
            key={src}
            ref={(el) => { imageRefs.current[i] = el; }}
            className={styles.headerImage}
            src={src}
            alt={`Fachada Risotto ${i + 1}`}
            style={{ opacity: i === 0 ? 1 : 0 }}
          />
        ))}
      </div>
      <div className={styles.textContainer}>
        <p className={styles.headerText}>O Risotto é um apartamento que une conforto, modernidade e contato com a natureza. Projetado para oferecer tranquilidade e bem-estar, proporciona um ambiente acolhedor, cercado por áreas verdes e pensado para quem valoriza qualidade de vida.</p>
         <li className={styles.ctaContainer}><a href="#" className={styles.cta}>Faça um orçamento</a></li>
      </div>
    </div>

      <div className={styles.title}>
        <h1>RISOTTO</h1>
        <p>Apartamentos em Áreas Verdes</p>
      </div>
    </header>
  );
};

export default Header;
