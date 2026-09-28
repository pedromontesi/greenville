import styles from "./ModelViewer.module.scss";

type ModelViewerProps = {
  title: string;
  src: string;
};

export const ModelViewer = ({ title, src }: ModelViewerProps) => (
  <div className={styles.wrapper}>
    <iframe
      className={styles.iframe}
      title={title}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; fullscreen; xr-spatial-tracking"
      src={src}
    />
  </div>
);
