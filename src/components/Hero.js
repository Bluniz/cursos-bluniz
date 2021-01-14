import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { breakAt, BreakpointSize } from "./Breakpoints";

const colorYellow = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;
const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 2px;
  position: relative;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 2.5rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    background-color: ${colorYellow};
    height: 5px;
    width: 70px;
  }

  strong {
    color: ${colorYellow};
  }
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${colorYellow};
    }
  }
`;

const Container = styled.div`
  width: 100%auto;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)} {
    width: 1040px;
    margin: 0 auto;
    padding: 0;
  }
`;

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
      <button>Matricule-se agora</button>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node,
};

Hero.defaultProps = {
  children: null,
};

export default Hero;
