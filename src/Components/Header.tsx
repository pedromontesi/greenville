import logo from "/src/assets/svg/maple-logo.svg";
import headerPhoto from "/src/assets/img/header-photo.jpg";
import styles from "./Header.module.scss";

const Header = () => {
  const photo = [headerPhoto];

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
    
    <div className={styles.showcaseCointainer}>
      <ul>
            <li>
              <img className={styles.headerImage} src={photo[0]} alt="Header Photo" />
            </li>
      </ul>
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
