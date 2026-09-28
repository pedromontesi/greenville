import headerPhoto from "/src/assets/img/header-photo.jpg";
import conectionPhoto from "/src/assets/img/conection.jpg";
import saudadePhoto from "/src/assets/img/saudade.jpg";
import historyPhoto from "/src/assets/img/history.jpg";
import instagram from "/src/assets/svg/instagram.svg";
import email from "/src/assets/svg/email.svg";
import whatsapp from "/src/assets/svg/whatsapp.svg";

import type { FeatureBlockProps, SocialItem } from "../../components/molecules";
import type { Stat } from "../../components/organisms";

// Fotos de exemplo do hero banner.
// A primeira é a foto local do projeto; as demais são fotos de exemplo
// puxadas do Unsplash (Unsplash License — uso livre, sem custo).
export const heroPhotos: string[] = [
  headerPhoto,
  "https://images.unsplash.com/photo-1756668765680-80c792ff1238?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536663488274-baee3471fc69?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1731223835878-adb504835539?w=1920&q=80&auto=format&fit=crop",
  // Fachada com varandas cheias de plantas, num prédio cercado de árvores.
  "https://images.unsplash.com/photo-1650805180950-4189f2c6665d?w=1920&q=80&auto=format&fit=crop",
  // Prédio com fachada verde/plantas e entrada arborizada (Berlim).
  "https://images.unsplash.com/photo-1694886735860-e33c7b93b5c8?w=1920&q=80&auto=format&fit=crop",
  // Prédio cercado por árvores e vegetação densa.
  "https://images.unsplash.com/photo-1661839986342-f5f4747f27a6?w=1920&q=80&auto=format&fit=crop",
];

export const intro = {
  text: "O Greenville é um condomínio que une conforto, modernidade e contato com a natureza. Projetado para oferecer tranquilidade e bem-estar, proporciona um ambiente acolhedor, cercado por áreas verdes e pensado para quem valoriza qualidade de vida.",
  ctaLabel: "Faça um orçamento",
  ctaHref: "#",
};

export const model = {
  title: "apartamento-baixo-poligono",
  src: "https://sketchfab.com/models/5bca7760e70746dc82a240765bfc8f7c/embed",
};

export const features: FeatureBlockProps[] = [
  {
    title: "CONEXÃO",
    text: "Apartamentos bem localizados e rodeados por árvores, que oferecem conforto, praticidade e uma conexão agradável com a natureza.",
    image: conectionPhoto,
    imageAlt: "Conection Photo",
    variant: "dark",
    imagePosition: "right",
  },
  {
    title: "SAUDADE",
    text: "Apartamentos com fachada em cores claras, que remetem à leveza do verão. Bem conservados por fora, destacam-se pela aparência agradável e acolhedora.",
    image: saudadePhoto,
    imageAlt: "Saudade Photo",
    variant: "light",
    imagePosition: "left",
  },
  {
    title: "HISTÓRIA",
    text: "Prédios históricos que carregam consigo valorização do tempo, momentos e autenticidade. Como esta porta de madeira original que hoje simboliza a continuidade da vida urbana.",
    image: historyPhoto,
    imageAlt: "History Photo",
    variant: "dark",
    imagePosition: "right",
  },
];

export const stats: Stat[] = [
  { target: 16, label: "Locais" },
  { target: 100, label: "Clientes", offset: true },
  { target: 200, label: "Compras" },
];

export const footer = {
  title: "Fale conosco",
  address: "Rua X - Via Láctea, Planeta Terra",
  socials: [
    { icon: instagram, alt: "Instagram" },
    { icon: email, alt: "Email" },
    { icon: whatsapp, alt: "WhatsApp" },
  ] satisfies SocialItem[],
};
