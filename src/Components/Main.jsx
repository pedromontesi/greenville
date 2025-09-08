import mainPhoto1 from "/src/assets/img/conection.jpg";
import mainPhoto2 from "/src/assets/img/saudade.jpg";
import mainPhoto3 from "/src/assets/img/history.jpg";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <section>
      <main className={styles.container}>

        <div className={styles.block}>
          <div className={styles.textBox}>
            <h1>CONEXÃO</h1>
            <p>
              Apartamentos bem localizados e rodeados por<br />
              árvores, que oferecem conforto, praticidade e<br />
              uma conexão agradável com a natureza.
            </p>
          </div>
          <img src={mainPhoto1} alt="Conection Photo" />
        </div>

        <div className={`${styles.block} ${styles.offBackground}`}>
          <img src={mainPhoto2} alt="Saudade Photo" />
          <div className={styles.textBox}>
            <h1>SAUDADE</h1>
            <p>
              Apartamentos com fachada em cores claras, que<br />
              remetem à leveza do verão. Bem conservados por<br />
              fora, destacam-se pela aparência agradável e<br />
              acolhedora.
            </p>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.textBox}>
            <h1>HISTÓRIA</h1>
            <p>
              Prédios históricos que carregam consigo a<br />
              valorização do tempo, momentos e autenticidade.<br />
              Como esta porta de madeira original que hoje<br />
              simboliza a continuidade da vida urbana.
            </p>
          </div>
          <img src={mainPhoto3} alt="History Photo" />
        </div>

      </main>
    </section>
  );
};

export default Main;
