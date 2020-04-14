import React, { ReactElement, useState } from "react";
import { PropsDoc } from "../components/PropsDoc";
import { Accordion } from "../../../src/Accordion";
import doc from "!!@advclb/react-docgen-loader!../../../src/Accordion";

export function AccordionPage(): ReactElement {
  const [open, toggle] = useState(true);
  return (
    <>
      <h1>Accordion</h1>

      <h2>Showcase</h2>

      <h3>Default</h3>
      <Accordion header="Accordion">
        <div style={{ background: "#ff8888", width: 400, height: 400 }}></div>
      </Accordion>

      <h3>Initial open state</h3>
      <Accordion initialOpen header="Accordion">
        <div style={{ background: "#ff8888", width: 400, height: 400 }}></div>
      </Accordion>

      <h3>Controlled</h3>
      <Accordion open={open} onToggle={toggle} header="Accordion">
        <div style={{ background: "#ff8888", width: 400, height: 400 }}></div>
      </Accordion>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </>
  );
}

AccordionPage.meta = {
  path: "/accordion",
  name: "Accordion",
};
