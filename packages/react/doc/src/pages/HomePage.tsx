import React, { ReactElement } from "react";
import { DocContainer } from "../components/DocContainer";

export function HomePage(): ReactElement {
  return (
    <DocContainer>
      <h1>Adventure Club Design System</h1>
    </DocContainer>
  );
}

HomePage.meta = {
  path: "/",
  name: "Home",
};
