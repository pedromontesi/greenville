import { PageTemplate } from "../../components/templates";
import {
  FeatureSection,
  Footer,
  Header,
  ModelViewer,
  StatsSection,
} from "../../components/organisms";
import { features, footer, heroPhotos, intro, model, stats } from "./content";

const Home = () => (
  <PageTemplate
    header={<Header photos={heroPhotos} introText={intro.text} ctaLabel={intro.ctaLabel} ctaHref={intro.ctaHref} />}
    model={<ModelViewer title={model.title} src={model.src} />}
    content={<FeatureSection features={features} />}
    stats={<StatsSection stats={stats} />}
    footer={<Footer title={footer.title} address={footer.address} socials={footer.socials} />}
  />
);

export default Home;
