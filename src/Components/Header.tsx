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
  // Fachada com varandas cheias de plantas, num prédio cercado de árvores.
  "https://images.unsplash.com/photo-1650805180950-4189f2c6665d?w=1920&q=80&auto=format&fit=crop",
  // Prédio com fachada verde/plantas e entrada arborizada (Berlim).
  "https://images.unsplash.com/photo-1694886735860-e33c7b93b5c8?w=1920&q=80&auto=format&fit=crop",
  // Prédio cercado por árvores e vegetação densa.
  "https://images.unsplash.com/photo-1661839986342-f5f4747f27a6?w=1920&q=80&auto=format&fit=crop",
];

const Header = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      // Quanto o trilho precisa andar para a última imagem encostar no fim
      // do viewport visível.
      const getScrollDistance = () =>
        Math.max(0, track.scrollWidth - wrapper.clientWidth);

      if (getScrollDistance() <= 0) return;

      // Trilho de imagens lado a lado: a seção fica "travada" (pin) na tela
      // enquanto o scroll do usuário desliza as imagens horizontalmente; o
      // scroll da página só é liberado quando a última imagem termina.
      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        animation: tween,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
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

      <div ref={pinRef} className={styles.showcaseContainer}>
        <div ref={wrapperRef} className={styles.imageWrapper}>
          <div ref={trackRef} className={styles.imageTrack}>
            {heroPhotos.map((src, i) => (
              <div className={styles.imageItem} key={src}>
                <img
                  className={styles.headerImage}
                  src={src}
                  alt={`Fachada Risotto ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.textContainer}>
          <p className={styles.headerText}>O Greenville é um condomínio que une conforto, modernidade e contato com a natureza. Projetado para oferecer tranquilidade e bem-estar, proporciona um ambiente acolhedor, cercado por áreas verdes e pensado para quem valoriza qualidade de vida.</p>
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