import logo from "/src/assets/svg/maple-logo.svg";
import headerPhoto1 from "/src/assets/img/header-photo-1.jpg";
import headerPhoto2 from "/src/assets/img/header-photo-2.jpg";
import headerPhoto3 from "/src/assets/img/header-photo-3.jpg";
import styles from "./Header.module.scss";

const Header = () => {
  const photos = [headerPhoto1, headerPhoto2, headerPhoto3];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="Logo Maple" className={styles.logo} />
        <ul className={styles.navList}>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Preço</a></li>
          <li><a href="#">Galeria</a></li>
        </ul>
      </nav>

      <ul className={styles.photoGallery}>
        {photos.map((photo, index) => (
          <li key={index}>
            <img src={photo} alt={`Header Photo ${index + 1}`} />
          </li>
        ))}
      </ul>


      <div className={styles.title}>
        <h1>GREENVILLE</h1>
        <p>Apartamentos em Áreas Verdes</p>
      </div>
    </header>
  );
};

export default Header;
