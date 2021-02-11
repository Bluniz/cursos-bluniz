import Feature from "components/atoms/Feature";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import Hero from "components/molecules/Hero";
import Section from "components/molecules/Section";

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
  </>
);

/* Home.defaultProps = {};

Home.propTypes = {}; */

export default Home;
