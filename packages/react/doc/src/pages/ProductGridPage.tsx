import React, { ReactElement } from "react";
import { PropsDoc } from "../PropsDoc";
import { ProductGrid } from "../../../src/ProductGrid";
import doc from "!!@advclb/react-docgen-loader!../../../src/ProductGrid";
import Container from "../Container";
import Example from "../Example";

const image = (
  <img
    src="https://source.unsplash.com/qEOV3icU_Y4"
    alt="By Ho Hyou on Unsplash"
  />
);

export function ProductGridPage(): ReactElement {
  return (
    <Container>
      <h1>ProductGrid</h1>

      <h2>Showcase</h2>

      <h3>With Image</h3>
      <Example
        jsx={`<ProductGrid ratio={21 / 9}>
  <img
    src="https://source.unsplash.com/qEOV3icU_Y4"
    alt="By Ho Hyou on Unsplash"
  />
</ProductGrid>`}
      >
        <ProductGrid>{image}</ProductGrid>
      </Example>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </Container>
  );
}

ProductGridPage.meta = {
  path: "/product-grid",
  name: "ProductGrid",
  group: "layouts",
};
