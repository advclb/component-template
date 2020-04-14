import React, { ReactElement } from "react";
import { PropsDoc } from "../components/PropsDoc";
import { Button } from "../../../src/Button";
import doc from "!!@advclb/react-docgen-loader!../../../src/Button";

export function ButtonPage(): ReactElement {
  return (
    <>
      <h1>Button</h1>
      <h2>Showcase</h2>
      <h3>Variants &amp; Themes</h3>
      <p>
        <Button variant="filled" theme="primary">
          Primary
        </Button>
        &nbsp;
        <Button variant="filled" theme="secondary">
          Secondary
        </Button>
        &nbsp;
        <Button variant="filled" theme="danger">
          Danger
        </Button>
        &nbsp;
        <Button disabled>Disabled</Button>
      </p>
      <p>
        <Button variant="outline" theme="primary">
          Primary
        </Button>
        &nbsp;
        <Button variant="outline" theme="secondary">
          Secondary
        </Button>
        &nbsp;
        <Button variant="outline" theme="danger">
          Danger
        </Button>
        &nbsp;
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </p>
      <p>
        <Button variant="flat" theme="primary">
          Primary
        </Button>
        &nbsp;
        <Button variant="flat" theme="secondary">
          Secondary
        </Button>
        &nbsp;
        <Button variant="flat" theme="danger">
          Danger
        </Button>
        &nbsp;
        <Button variant="flat" disabled>
          Disabled
        </Button>
      </p>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </>
  );
}

ButtonPage.meta = {
  path: "/button",
  name: "Button",
};
