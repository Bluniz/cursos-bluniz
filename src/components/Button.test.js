import { render, fireEvent } from "test-utils";
import Button from "./Button";

// ? Teste de texto renderizado
/*
? A propriedade render assim como seu nome diz
? renderiza o componente e me permite pegar alguns atributos
! Para lidar com eventos podemos importar o fireEvent da testing library
*/

test("renders a text", () => {
  const { getByText } = render(<Button>Click here</Button>);

  //! Em resumo eu espero que o texto "Click Here" esteja na DOM neste botão.
  //! O teste passa se ocorrer isso.
  expect(getByText("Click here")).toBeInTheDocument();
});

test("trigger event on click", () => {
  // ? jest.fn é um utilitario para criar uma função que é um mock, é possivel fazer algumas validações.
  const handleClick = jest.fn();
  const { getByRole } = render(<Button onClick={handleClick} />);
  //! getByRole é o nome do componente no HTML, no caso o button.

  fireEvent.click(getByRole("button"));

  // ? Espero que a função handle click tenha sido chamada!
  expect(handleClick).toBeCalled();
});
