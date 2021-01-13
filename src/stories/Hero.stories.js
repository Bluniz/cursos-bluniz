import Hero from "../components/Hero";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Adquira conhecimento e se aprimore cada vez mais" />
);

export const withList = () => (
  <Hero title="Adquira conhecimento e se aprimore cada vez mais">
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. N</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. N</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. N</li>
    </ul>
  </Hero>
);
