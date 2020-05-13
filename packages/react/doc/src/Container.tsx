import React, { ReactNode, ReactElement } from "react";

export type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps): ReactElement {
  return <div className="doc-container">{children}</div>;
}
