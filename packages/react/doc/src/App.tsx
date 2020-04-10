import React, { ReactElement } from "react";
import Button from "../../src/Button";

export default function App(): ReactElement {
  return (
    <div>
      <h3>Normal</h3>
      <p>
        <Button primary>OK</Button>
        &nbsp;
        <Button>Cancel</Button>
        &nbsp;
        <Button>Back</Button>
      </p>
      <h3>Flat</h3>
      <p>
        <Button flat>More</Button>
        &nbsp;
        <Button flat>Help</Button>
        &nbsp;
        <Button flat>Show</Button>
      </p>
      <h3>Outline</h3>
      <p>
        <Button outline>More</Button>
        &nbsp;
        <Button outline>Help</Button>
        &nbsp;
        <Button outline>Show</Button>
      </p>
    </div>
  );
}
