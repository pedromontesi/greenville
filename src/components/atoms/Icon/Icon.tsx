type IconProps = {
  src: string;
  alt: string;
};

export const Icon = ({ src, alt }: IconProps) => <img src={src} alt={alt} />;
