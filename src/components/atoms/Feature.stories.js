import {
  FaBook,
  FaSchool,
  FaChalkboardTeacher,
  FaMoneyBill,
} from "react-icons/fa";
import Grid from "components/atoms/Grid";
import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature title="Teste" icon={<FaBook />}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </Feature>
);

export const withGrid = () => (
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
);
