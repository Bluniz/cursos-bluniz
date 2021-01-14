import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;0,700;1,200&display=swap");
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 100%;
  color: #212121;
  box-sizing: border-box;
}


*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
}
`;

export default GlobalStyle;
