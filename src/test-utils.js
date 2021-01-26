import ThemeProvider from "styles/ThemeProvider";
import { render } from "@testing-library/react";

const TestProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

//! Basicamente esse arquivo esporta tudo que a lib testing-library exporta.
export * from "@testing-library/react";

//! Sobreescrevendo o metodo render da lib
//! O componente render recebe as props ui e options
//! No options temos a opção chamada wrapper, nele podemos passar o componente de provider que ele irá fazer um encapsulamento automatico.
const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });
export { customRender as render };
