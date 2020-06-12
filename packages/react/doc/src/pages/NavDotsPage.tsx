import React, { ReactElement, useState } from "react";
import { PropsDoc } from "../PropsDoc";
import Container from "../Container";
import Example from "../Example";
import { NavDots } from "../../../src/NavDots";
import doc from "!!@advclb/react-docgen-loader!../../../src/NavDots";

export function NavDotsPage(): ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Container>
      <h1>NavDots</h1>
      <h2>Showcase</h2>
      <h3>Basic</h3>
      <Example
        jsx={`<NavDots
  length={5}
  activeIndex={activeIndex}
  onActiveIndexChange={setActiveIndex}
/>`}
      >
        <NavDots
          length={5}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
        />
      </Example>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </Container>
  );
}

NavDotsPage.meta = {
  path: "/nav-dots",
  name: "NavDots",
  group: "controls",
};
