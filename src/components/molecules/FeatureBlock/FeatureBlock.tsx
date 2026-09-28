import { Photo } from "../../atoms";
import { TextBox } from "../TextBox/TextBox";
import styles from "./FeatureBlock.module.scss";

export type FeatureBlockProps = {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  /** `dark`: fundo verde-escuro. `light`: fundo verde-claro. */
  variant?: "dark" | "light";
  imagePosition?: "left" | "right";
};

export const FeatureBlock = ({
  title,
  text,
  image,
  imageAlt,
  variant = "dark",
  imagePosition = "right",
}: FeatureBlockProps) => {
  const textBox = (
    <TextBox
      title={title}
      text={text}
      tone={variant === "dark" ? "onDark" : "onLight"}
    />
  );
  const photo = <Photo src={image} alt={imageAlt} />;

  return (
    <div className={`${styles.block} ${styles[variant]}`}>
      {imagePosition === "left" ? (
        <>
          {photo}
          {textBox}
        </>
      ) : (
        <>
          {textBox}
          {photo}
        </>
      )}
    </div>
  );
};
