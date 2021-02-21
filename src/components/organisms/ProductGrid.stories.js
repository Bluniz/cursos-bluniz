import ExampleImage from "stories/assets/example.jpg";
import ProductGrid from "./ProductGrid";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: ExampleImage, title: "Título 1", summary: "texto" },
      { id: 2, image: ExampleImage, title: "Título 2", summary: "texto" },
      { id: 3, image: ExampleImage, title: "Título 3", summary: "texto" },
      { id: 4, image: ExampleImage, title: "Título 4", summary: "texto" },
      { id: 5, image: ExampleImage, title: "Título 5", summary: "texto" },
      { id: 6, image: ExampleImage, title: "Título 6", summary: "texto" },
    ]}
  />
);
