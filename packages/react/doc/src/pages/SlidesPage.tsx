import React, { ReactElement, useState } from "react";
import { PropsDoc } from "../PropsDoc";
import Container from "../Container";
import Example from "../Example";
import { Slides } from "../../../src/Slides";
import { NavDots } from "../../../src/NavDots";
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
      <h3>Slides with dots</h3>
      <Example
        jsx={`<Slides activeIndex={activeIndex} onActiveIndexChanged={setActiveIndex}>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</Slides>
<NavDots
  length={5}
  activeIndex={activeIndex}
  onActiveIndexChange={setActiveIndex}
/>`}
      >
        <Slides activeIndex={activeIndex} onActiveIndexChange={setActiveIndex}>
          <DummyCard>1</DummyCard>
          <DummyCard>2</DummyCard>
          <DummyCard>3</DummyCard>
          <DummyCard>4</DummyCard>
          <DummyCard>5</DummyCard>
        </Slides>
        <NavDots
          length={5}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
        />
      </Example>

      <h3>Slides with dashes</h3>
      <Example
        jsx={`<Slides activeIndex={activeIndex} onActiveIndexChanged={setActiveIndex}>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</Slides>
<NavDots
  shape="dash"
  length={5}
  activeIndex={activeIndex}
  onActiveIndexChange={setActiveIndex}
/>`}
      >
        <Slides activeIndex={activeIndex} onActiveIndexChange={setActiveIndex}>
          <DummyCard>1</DummyCard>
          <DummyCard>2</DummyCard>
          <DummyCard>3</DummyCard>
          <DummyCard>4</DummyCard>
          <DummyCard>5</DummyCard>
        </Slides>
        <NavDots
          shape="dash"
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

SlidesPage.meta = {
  path: "/slides",
  name: "Slides",
  group: "layouts",
};
