import styles from "./TextBox.module.scss";

type TextBoxProps = {
  title: string;
  text: string;
  /** `onDark`: texto claro em fundo escuro. `onLight`: texto escuro em fundo claro. */
  tone?: "onDark" | "onLight";
};

export const TextBox = ({ title, text, tone = "onDark" }: TextBoxProps) => (
  <div className={`${styles.textBox} ${styles[tone]}`}>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);
