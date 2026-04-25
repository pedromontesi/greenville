import styles from "./Footer.module.scss"; 
import instagram from "/src/assets/svg/instagram.svg";
import email from "/src/assets/svg/email.svg";
import whatsapp from "/src/assets/svg/whatsapp.svg";
import logo from "/src/assets/svg/maple-logo.svg";

const Footer = () => {
  return (
    <footer className={styles.background}>
      <div className={styles.conteiner}>
        <h1>Fale conosco</h1>
        <div className={styles.socialBox}>
          <img src={instagram} alt="Instagram" />
          <img src={email} alt="Email" />
          <img src={whatsapp} alt="WhatsApp" />
        </div>
        <p>Rua X - Via Láctea, Planeta Terra</p>
      </div>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={logo} alt="Logo Maple" />
      </div>
    </footer>
  );
};

export default Footer;
