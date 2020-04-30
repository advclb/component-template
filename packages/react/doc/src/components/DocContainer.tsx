import React, { ReactNode, ReactElement } from "react";

export type DocContainerProps = {
  children: ReactNode;
};

export function DocContainer({ children }: DocContainerProps): ReactElement {
  return <div className="doc-container">{children}</div>;
}
