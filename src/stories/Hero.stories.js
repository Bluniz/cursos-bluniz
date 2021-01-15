import Heading from "../components/Heading";
import Hero from "../components/Hero";
import NotebookBg from "./assets/notebook-bg.jpg";
import WritterBg from "./assets/writer-bg.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={NotebookBg}>
    <h1>Adquira conhecimento e se aprimore cada vez mais</h1>
  </Hero>
);

export const withList = () => (
  <Hero image={WritterBg}>
    <Heading>
      <h1>
        Adquira <strong>conhecimento</strong>
        <br />e se aprimore cada vez mais
      </h1>
    </Heading>

    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. N</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. N</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. N</li>
    </ul>
  </Hero>
);
