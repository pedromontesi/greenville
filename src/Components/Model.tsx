import styles from "./Model.module.scss"; 


export function Model() {
  return (
    <div className={styles.sketchfabEmbedWrapper}>
      <iframe
        title="apartamento-baixo-poligono"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/5bca7760e70746dc82a240765bfc8f7c/embed"
        style={{
          width: "100%",
          height: "500px",
        }}
      />
    </div>
  );
}