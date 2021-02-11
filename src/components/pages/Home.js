import Feature from "components/atoms/Feature";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import Hero from "components/molecules/Hero";
import Section from "components/molecules/Section";
import AboutVideo from "assets/book_pages.mov";

// import PropTypes from "prop-types";
import {
  FaBook,
  FaChalkboardTeacher,
  FaMoneyBill,
  FaSchool,
} from "react-icons/fa";
import Button from "components/atoms/Button";
import WritterBg from "../../assets/writer-bg.jpg";

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
      </Heading>
    </Section>
    <Section>
      <Heading>
        <h2>Bluniz Cursos</h2>
      </Heading>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Dúvidas Recorrentes </h2>
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
  </>
);

/* Home.defaultProps = {};

Home.propTypes = {}; */

export default Home;
