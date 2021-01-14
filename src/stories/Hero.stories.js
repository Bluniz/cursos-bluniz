import Hero from "../components/Hero";
import NotebookBg from "./assets/notebook-bg.jpg";
import WritterBg from "./assets/writer-bg.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero
    title="Adquira conhecimento e se aprimore cada vez mais"
    image={NotebookBg}
  />
);

export const withList = () => (
  <Hero
    title={
      <span>
        Adquira <strong>conhecimento</strong>
        <br />e se aprimore cada vez mais
      </span>
    }
    image={WritterBg}
  >
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. N</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. N</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. N</li>
    </ul>
  </Hero>
);
