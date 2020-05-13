import React, { ReactElement } from "react";
import Container from "../Container";

export function HomePage(): ReactElement {
  return (
    <Container>
      <h1>Adventure Club Design System</h1>
    </Container>
  );
}

HomePage.meta = {
  path: "/",
  name: "Home",
  group: "",
};
