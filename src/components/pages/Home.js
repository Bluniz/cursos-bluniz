import Feature from "components/atoms/Feature";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import Hero from "components/molecules/Hero";
import Section from "components/molecules/Section";
import AboutVideo from "assets/book_pages.mov";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import WebImage from "assets/internet.jpg";
import JavascriptImage from "assets/javascript.png";
import ReactImage from "assets/react.png";
import NextJsImage from "assets/nextJs.png";

// import PropTypes from "prop-types";
import {
  FaBook,
  FaChalkboardTeacher,
  FaMoneyBill,
  FaSchool,
} from "react-icons/fa";
import Button from "components/atoms/Button";
import Footer from "components/organisms/Footer";
import WritterBg from "../../assets/writer-bg.jpg";

const products = [
  {
    id: 1,
    image: WebImage,
    title: "Iniciando na Web",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: JavascriptImage,
    title: "JavaScript ninja",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: ReactImage,
    title: "React do básico ao avançado",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    image: NextJsImage,
    title: "Renderização estática com NextJs",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Home = () => (
  <>
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
      <Button variant="outlined" color="primary">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature title="Maior e melhor conteudo" icon={<FaBook />}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature title="Teoria e Prática" icon={<FaSchool />}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature title="Excelentes professores" icon={<FaChalkboardTeacher />}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature title="Grátis" icon={<FaMoneyBill />}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Bluniz Cursos</h2>
          </Heading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            voluptatum dolorem minima, voluptates eaque adipisci necessitatibus
            laborum accusantium amet dignissimos id ipsa et deleniti
            reprehenderit explicabo quae quaerat est! Unde!
          </p>

          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas Recorrentes </h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como renovo meu bootcamp?">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sunt
          voluptas porro recusandae deleniti re
        </Accordion>
        <Accordion title="Como faço a mudança de bootcamp?">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sunt
          voluptas porro recusandae deleniti re
        </Accordion>
        <Accordion title="Não conclui no periodo, e agora?">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sunt
          voluptas porro recusandae deleniti re
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

/* Home.defaultProps = {};

Home.propTypes = {}; */

export default Home;
