import React, { ReactElement, useState } from "react";
import { PropsDoc } from "../components/PropsDoc";
import { DocContainer } from "../components/DocContainer";
import { Button } from "../../../src/Button";
import { Collapse } from "../../../src/Collapse";
import doc from "!!@advclb/react-docgen-loader!../../../src/Collapse";

export function CollapsePage(): ReactElement {
  const [open, toggle] = useState(false);
  return (
    <DocContainer>
      <h1>Collapse</h1>
      <h2>Showcase</h2>
      <h3>Basic</h3>
      <p>
        <Button onClick={(): void => toggle(!open)}>Toggle</Button>
      </p>
      <Collapse open={open}>
        <div style={{ background: "#ff8888", width: 400, height: 400 }}></div>
      </Collapse>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </DocContainer>
  );
}

CollapsePage.meta = {
  path: "/collapse",
  name: "Collapse",
};
