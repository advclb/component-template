import React, { Component, ReactNode, ReactElement } from "react";

export interface FoobarProps {
  children: ReactNode;
}

export class Foobar extends Component<FoobarProps> {
  render(): ReactElement {
    return <div className="ac-foobar">{this.props.children}</div>;
  }
}
