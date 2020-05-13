import React, { ReactElement } from "react";
import { PropsDoc } from "../PropsDoc";
import { Input } from "../../../src/Input";
import doc from "!!@advclb/react-docgen-loader!../../../src/Input";
import Container from "../Container";

export function InputPage(): ReactElement {
  return (
    <Container>
      <h1>Input</h1>

      <h2>Showcase</h2>

      <h3>Variants</h3>
      <p>
        <Input variant="outline" placeholder="Outline" />
      </p>
      <p>
        <Input variant="underline" placeholder="Underline" />
      </p>
      <p>
        <Input variant="filled" placeholder="Filled" />
      </p>

      <h3>Types</h3>

      <p>
        <Input type="number" placeholder="Number" />
      </p>

      <p>
        <Input type="tel" placeholder="Telephone" />
      </p>

      <p>
        <Input type="email" placeholder="Email" />
      </p>

      <p>
        <Input type="password" placeholder="Password" />
      </p>

      <p>
        <Input type="date" />
        &nbsp;
        <Input type="time" />
      </p>

      <h3>Validation</h3>

      <p>
        <Input type="email" value="not an email" />
      </p>

      <p>
        <Input variant="underline" type="email" value="not an email" />
      </p>

      <p>
        <Input variant="filled" type="email" value="not an email" />
      </p>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </Container>
  );
}

InputPage.meta = {
  path: "/input",
  name: "Input",
  group: "controls",
};
