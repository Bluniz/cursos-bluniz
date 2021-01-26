import { render } from "test-utils";
import Button from "./Button";

// ? Teste de texto renderizado
/*
? A propriedade render assim como seu nome diz
? renderiza o componente e me permite pegar alguns atributos
*/

test("renders a text", () => {
  const { getByText } = render(<Button>Click here</Button>);

  //! Em resumo eu espero que o texto "Click Here" esteja na DOM neste botão.
  //! O teste passa se ocorrer isso.
  expect(getByText("Click here")).toBeInTheDocument();
});
