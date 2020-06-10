import React, { ReactElement } from "react";
import { PropsDoc } from "../PropsDoc";
import { ProductCard } from "../../../src/ProductCard";
import doc from "!!@advclb/react-docgen-loader!../../../src/ProductCard";
import Container from "../Container";
import Example from "../Example";

export function ProductCardPage(): ReactElement {
  return (
    <Container>
      <h1>ProductCard</h1>

      <h2>Showcase</h2>

      <h3>With Image</h3>
      <Example
        jsx={`<ProductCard ratio={21 / 9}>
  <img
    src="https://source.unsplash.com/qEOV3icU_Y4"
    alt="By Ho Hyou on Unsplash"
  />
</ProductCard>`}
      >
        <ProductCard
          cover="https://source.unsplash.com/qEOV3icU_Y4"
          name="Ice Cream"
          price="3.5 &euro;"
        />
      </Example>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </Container>
  );
}

ProductCardPage.meta = {
  path: "/product-card",
  name: "ProductCard",
  group: "blocks",
};
