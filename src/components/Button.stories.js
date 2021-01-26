import styled from "styled-components";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Toolbar = styled.div`
  & > * {
    margin-right: 9px;
  }
`;

export const usage = () => (
  <Toolbar>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="danger">Danger</Button>
  </Toolbar>
);
