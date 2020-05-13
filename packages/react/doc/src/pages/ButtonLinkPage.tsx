import React, { ReactElement } from "react";
import { PropsDoc } from "../PropsDoc";
import { ButtonLink } from "../../../src/ButtonLink";
import doc from "!!@advclb/react-docgen-loader!../../../src/ButtonLink";
import Container from "../Container";

export function ButtonLinkPage(): ReactElement {
  return (
    <Container>
      <h1>ButtonLink</h1>
      <h2>Showcase</h2>
      <h3>Variants</h3>
      <p>
        <ButtonLink variant="filled" to="#">
          Filled
        </ButtonLink>
        &nbsp;
        <ButtonLink variant="outline" to="#">
          Outline
        </ButtonLink>
        &nbsp;
        <ButtonLink variant="flat" to="#">
          Flat
        </ButtonLink>
      </p>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </Container>
  );
}

ButtonLinkPage.meta = {
  path: "/button-link",
  name: "ButtonLink",
  group: "controls",
};
