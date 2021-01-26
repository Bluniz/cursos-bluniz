import styled from "styled-components";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 9px;
  }
`;

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events}>Default</Button>
      <Button color="primary" {...events}>
        Primary
      </Button>
      <Button color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button {...events} disabled>
        Default
      </Button>
      <Button color="primary" {...events} disabled>
        Primary
      </Button>
      <Button color="danger" {...events} disabled>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="outlined" {...events}>
        Default
      </Button>
      <Button variant="outlined" color="primary" {...events}>
        Primary
      </Button>
      <Button variant="outlined" color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="outlined" {...events} disabled>
        Default
      </Button>
      <Button variant="outlined" color="primary" {...events} disabled>
        Primary
      </Button>
      <Button variant="outlined" color="danger" {...events} disabled>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="link" {...events}>
        Default
      </Button>
      <Button variant="link" color="primary" {...events}>
        Primary
      </Button>
      <Button variant="link" color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="link" {...events} disabled>
        Default
      </Button>
      <Button variant="link" color="primary" {...events} disabled>
        Primary
      </Button>
      <Button variant="link" color="danger" {...events} disabled>
        Danger
      </Button>
    </Toolbar>
  </div>
);
