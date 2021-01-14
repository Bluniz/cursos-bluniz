import styled, { css } from "styled-components";

const Root = styled.div`
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
  `}
`;
const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;0,700;1,200&display=swap");
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
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

  li::before {
    content: "\\2713\\0020";
  }
`;

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <div>
      <Title>{title}</Title>
      <Content>{children}</Content>
      <button>Matricule-se agora</button>
    </div>
  </Root>
);

export default Hero;
