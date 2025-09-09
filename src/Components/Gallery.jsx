import galleryPhoto1 from '/src/assets/img/gallery-photo-1.jpg';
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <span>
          <img src={galleryPhoto1} alt="Foto principal" />
        </span>
      </div>
      <div className={styles.right}>
        <img src={galleryPhoto1} alt="Foto 1" />
        <img src={galleryPhoto1} alt="Foto 2" />
        <img src={galleryPhoto1} alt="Foto 3" />
        <img src={galleryPhoto1} alt="Foto 4" />
      </div>
    </section>
  );
}

export default Gallery;
