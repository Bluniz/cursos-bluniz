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
