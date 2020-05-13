import React, { ReactElement } from "react";
import { PropsDoc } from "../PropsDoc";
import { AspectRatio } from "../../../src/AspectRatio";
import doc from "!!@advclb/react-docgen-loader!../../../src/AspectRatio";
import Container from "../Container";
import Example from "../Example";

const image = (
  <img
    src="https://source.unsplash.com/qEOV3icU_Y4"
    alt="By Ho Hyou on Unsplash"
  />
);

export function AspectRatioPage(): ReactElement {
  return (
    <Container>
      <h1>AspectRatio</h1>

      <h2>Showcase</h2>

      <h3>With Image</h3>
      <Example
        jsx={`<AspectRatio ratio={21 / 9}>
  <img
    src="https://source.unsplash.com/qEOV3icU_Y4"
    alt="By Ho Hyou on Unsplash"
  />
</AspectRatio>`}
      >
        <AspectRatio ratio={21 / 9}>{image}</AspectRatio>
      </Example>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </Container>
  );
}

AspectRatioPage.meta = {
  path: "/aspect-ratio",
  name: "AspectRatio",
  group: "utilities",
};
