import React, { ReactElement, useState } from "react";
import { PropsDoc } from "../PropsDoc";
import Container from "../Container";
import Example from "../Example";
import { Button } from "../../../src/Button";
import { Slides } from "../../../src/Slides";
import doc from "!!@advclb/react-docgen-loader!../../../src/Slides";

function DummyCard({ children }: { children: string }): ReactElement {
  return (
    <div
      style={{
        background: "#555",
        color: "#fff",
        width: 300,
        height: 200,
        fontSize: 96,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

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

        <Button
          onClick={(): void => setActiveIndex(0)}
          disabled={activeIndex === 0}
        >
          1
        </Button>
        <Button
          onClick={(): void => setActiveIndex(1)}
          disabled={activeIndex === 1}
        >
          2
        </Button>
        <Button
          onClick={(): void => setActiveIndex(2)}
          disabled={activeIndex === 2}
        >
          3
        </Button>
        <Button
          onClick={(): void => setActiveIndex(3)}
          disabled={activeIndex === 3}
        >
          4
        </Button>

        <Button
          onClick={(): void => setActiveIndex(activeIndex + 1)}
          disabled={activeIndex > 2}
        >
          +
        </Button>
      </p>
      <Example
        jsx={`<Slides activeIndex={activeIndex} onActiveIndexChanged={setActiveIndex}>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</Slides>`}
      >
        <Slides activeIndex={activeIndex} onActiveIndexChange={setActiveIndex}>
          <DummyCard>1</DummyCard>
          <DummyCard>2</DummyCard>
          <DummyCard>3</DummyCard>
          <DummyCard>4</DummyCard>
        </Slides>
      </Example>

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
