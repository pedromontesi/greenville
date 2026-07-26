import logo from "/src/assets/svg/maple-logo.svg";
import headerPhoto from "/src/assets/img/header-photo.jpg";
import styles from "./Header.module.scss";

const Header = () => {
  const photo = [headerPhoto];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="Logo Maple" className={styles.logo} />
        <ul className={styles.navList}>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Preço</a></li>
          <li><a href="#">Galeria</a></li>
          <li className={styles.ctaContainer}><a href="#" className={styles.cta}>Faça um orçamento</a></li>
        </ul>
      </nav>

      <ul>
            <li>
              <img className={styles.headerImage} src={photo[0]} alt="Header Photo" />
            </li>
      </ul>


      <div className={styles.title}>
        <h1>GREENVILLE</h1>
        <p>Apartamentos em Áreas Verdes</p>
      </div>
    </header>
  );
};

export default Header;
