import React, { ReactElement } from "react";
import { ButtonLink } from "../../../src/ButtonLink";

export function ButtonLinkPage(): ReactElement {
  return (
    <div>
      <h3>Normal</h3>
      <p>
        <ButtonLink to="#" primary>
          OK
        </ButtonLink>
        &nbsp;
        <ButtonLink to="#">Cancel</ButtonLink>
        &nbsp;
        <ButtonLink to="#">Back</ButtonLink>
      </p>
      <h3>Flat</h3>
      <p>
        <ButtonLink to="#" flat>
          More
        </ButtonLink>
        &nbsp;
        <ButtonLink to="#" flat>
          Help
        </ButtonLink>
        &nbsp;
        <ButtonLink to="#" flat>
          Show
        </ButtonLink>
      </p>
      <h3>Outline</h3>
      <p>
        <ButtonLink to="#" outline>
          More
        </ButtonLink>
        &nbsp;
        <ButtonLink to="#" outline>
          Help
        </ButtonLink>
        &nbsp;
        <ButtonLink to="#" outline>
          Show
        </ButtonLink>
      </p>
    </div>
  );
}

ButtonLinkPage.meta = {
  path: "/button-link",
  name: "ButtonLink",
};
