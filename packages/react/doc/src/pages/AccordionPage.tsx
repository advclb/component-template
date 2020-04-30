import React, { ReactElement, useState } from "react";
import { PropsDoc } from "../components/PropsDoc";
import { Accordion } from "../../../src/Accordion";
import doc from "!!@advclb/react-docgen-loader!../../../src/Accordion";
import { DocContainer } from "../components/DocContainer";

export function AccordionPage(): ReactElement {
  const [open, toggle] = useState(true);
  return (
    <DocContainer>
      <h1>Accordion</h1>

      <h2>Showcase</h2>

      <h3>Default</h3>
      <p>
        <Accordion header="Accordion">
          <div style={{ background: "#ff8888", width: 400, height: 400 }}></div>
        </Accordion>
      </p>

      <h3>Initial open state</h3>
      <p>
        <Accordion initialOpen header="Accordion">
          <div style={{ background: "#ff8888", width: 400, height: 400 }}></div>
        </Accordion>
      </p>

      <h3>Controlled</h3>
      <p>
        <Accordion open={open} onToggle={toggle} header="Accordion">
          <div style={{ background: "#ff8888", width: 400, height: 400 }}></div>
        </Accordion>
      </p>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </DocContainer>
  );
}

AccordionPage.meta = {
  path: "/accordion",
  name: "Accordion",
};
