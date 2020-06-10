import React, { ReactElement, useState } from "react";
import { PropsDoc } from "../PropsDoc";
import Container from "../Container";
import { Button } from "../../../src/Button";
import { Slides } from "../../../src/Slides";
import doc from "!!@advclb/react-docgen-loader!../../../src/Slides";

export function SlidesPage(): ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Container>
      <h1>Slides</h1>
      <h2>Showcase</h2>
      <h3>Basic</h3>
      <p>
        <Button
          onClick={(): void => setActiveIndex(activeIndex - 1)}
          disabled={activeIndex < 1}
        >
          -
        </Button>
        {activeIndex}
        <Button
          onClick={(): void => setActiveIndex(activeIndex + 1)}
          disabled={activeIndex > 2}
        >
          +
        </Button>
      </p>
      <Slides activeIndex={activeIndex} onActiveIndexChanged={setActiveIndex}>
        <div style={{ background: "#ff8888", width: 400, height: 400 }}>1</div>
        <div style={{ background: "#ff8888", width: 400, height: 400 }}>2</div>
        <div style={{ background: "#ff8888", width: 400, height: 400 }}>3</div>
        <div style={{ background: "#ff8888", width: 400, height: 400 }}>4</div>
      </Slides>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </Container>
  );
}

SlidesPage.meta = {
  path: "/slides",
  name: "Slides",
  group: "layouts",
};
