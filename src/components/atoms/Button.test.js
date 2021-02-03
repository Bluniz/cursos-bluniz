import { render, fireEvent } from "test-utils";
import Button, { ButtonColors, ButtonsVariants } from "./Button";

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

//! Test.each ele roda um teste para cada propriedade setada, e é possivel passar o valor como props na função de callback
//! Basicamente eu pego todos os valores do objeto e retorno cada valor dentro de um array separado.
test.each(Object.values(ButtonColors).map((item) => [item]))(
  "renders with color %s",
  (color) => {
    const { asFragment } = render(<Button color={color} />);

    // ? Espero que o fragmento dê match com o snapshot feito.
    expect(asFragment()).toMatchSnapshot();
  }
);

test.each(Object.values(ButtonsVariants).map((item) => [item]))(
  "renders with variant %s",
  (variant) => {
    const { asFragment } = render(<Button variant={variant} />);

    // ? Espero que o fragmento dê match com o snapshot feito.
    expect(asFragment()).toMatchSnapshot();
  }
);

test("renders with color primary and variant outlined", () => {
  const { asFragment } = render(<Button color="primary" variant="outlined" />);

  // ? Espero que o fragmento dê match com o snapshot feito.
  expect(asFragment()).toMatchSnapshot();
});

test("renders with color primary and variant link", () => {
  const { asFragment } = render(<Button color="primary" variant="link" />);

  // ? Espero que o fragmento dê match com o snapshot feito.
  expect(asFragment()).toMatchSnapshot();
});
