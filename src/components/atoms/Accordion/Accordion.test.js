import { render, screen, fireEvent } from "test-utils";

import Accordion from "./Accordion";

const text = "My children text";
const title = "My Title";

test("render with title", () => {
  render(<Accordion title={title} />);

  // Espero que esse titulo esteja em meu documento
  expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders without children", () => {
  render(<Accordion>{text}</Accordion>);

  //! Query Retorna null se não encontrar
  // ? Get retorna uma excessão caso não encontre
  // * Caso o get não ache, imprime a DOM para analisarmos.
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("triggers onChange when it is clicked", async () => {
  const handleChange = jest.fn();

  render(<Accordion title={title} onChange={handleChange} />);

  await fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalledTimes(1);
});

describe("when is controlled", () => {
  describe("when starts opened", () => {
    test("renders with children", () => {
      render(<Accordion open>{text}</Accordion>);

      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test("triggers onChange when it is clicked", async () => {
      const handleChange = jest.fn();

      render(
        <Accordion title={title} open onChange={handleChange}>
          {text}
        </Accordion>
      );

      await fireEvent.click(screen.getByText(title));

      expect(handleChange).toBeCalledTimes(1);
    });

    test("hide children when open changes to false", () => {
      const { rerender } = render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      );

      rerender(
        <Accordion title={title} open={false}>
          {text}
        </Accordion>
      );

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });

    test("call default function when is clicked", async () => {
      render(<Accordion title={title} open />);

      await fireEvent.click(screen.getByText(title));
    });
  });

  describe("when starts closed", () => {
    test("renders without children", () => {
      render(<Accordion open={false}>{text}</Accordion>);

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
