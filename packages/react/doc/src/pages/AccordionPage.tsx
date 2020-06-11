import React, { ReactElement, useState } from "react";
import { PropsDoc } from "../PropsDoc";
import { Accordion } from "../../../src/Accordion";
import doc from "!!@advclb/react-docgen-loader!../../../src/Accordion";
import Container from "../Container";
import Example from "../Example";

const content = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo
      nunc suscipit turpis placerat interdum. Nam tristique vitae elit nec
      lobortis. Curabitur semper purus quis mauris ultrices, eget luctus mi
      pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Duis vitae aliquam nisi, non dignissim quam. Nam
      massa ante, tincidunt quis fermentum eu, tristique non augue. Vestibulum
      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      curae; Nam id augue vulputate, tempus neque quis, pellentesque ante. Proin
      venenatis urna in erat laoreet accumsan.
    </p>
    <p>
      Aenean ac ex rhoncus, ultricies risus id, posuere mi. Nunc pretium laoreet
      augue et convallis. Aenean a erat lobortis, accumsan quam eget,
      consectetur diam. Sed maximus, massa vel egestas congue, mi ligula aliquam
      nisl, vel mattis nibh enim non nisi. In finibus euismod ante vel tempus.
      Nulla facilisi. Quisque ligula massa, elementum at odio nec, condimentum
      consequat tellus. Phasellus consectetur, urna at tincidunt consectetur,
      eros massa bibendum odio, quis semper massa elit a nulla. Cras nibh ipsum,
      placerat non tortor ut, iaculis aliquam erat. Nulla facilisi. Vivamus
      metus velit, condimentum a commodo non, condimentum ac sapien. Maecenas
      placerat et justo at consequat. Proin quis ligula erat. Cras dapibus nunc
      quis leo tempus vestibulum. Integer mollis elit ut faucibus finibus.{" "}
    </p>
  </>
);

export function AccordionPage(): ReactElement {
  const [open, toggle] = useState(true);
  return (
    <Container>
      <h1>Accordion</h1>

      <h2>Showcase</h2>

      <h3>Default</h3>
      <Example
        jsx={`<Accordion header="Accordion">
  ...
</Accordion>`}
      >
        <Accordion header="Accordion">{content}</Accordion>
      </Example>

      <h3>Initial open state</h3>
      <Example
        jsx={`<Accordion initialOpen header="Accordion">
  ...
</Accordion>`}
      >
        <Accordion initialOpen header="Accordion">
          {content}
        </Accordion>
      </Example>

      <h3>Controlled</h3>
      <Example
        jsx={`<Accordion
  open={this.state.open}
  onToggle={open => this.setState({open})}
  header="Accordion"
>
  ...
</Accordion>`}
      >
        <Accordion open={open} onToggle={toggle} header="Accordion">
          {content}
        </Accordion>
      </Example>

      <h3>Multiple</h3>
      <Example
        jsx={`<Accordion header="Accordion">...</Accordion>
<Accordion header="Accordion">...</Accordion>
<Accordion header="Accordion">...</Accordion>`}
      >
        <Accordion header="Accordion">{content}</Accordion>
        <Accordion header="Accordion">{content}</Accordion>
        <Accordion header="Accordion">{content}</Accordion>
      </Example>

      <hr></hr>

      <PropsDoc props={doc.props} />
    </Container>
  );
}

AccordionPage.meta = {
  path: "/accordion",
  name: "Accordion",
  group: "blocks",
};
