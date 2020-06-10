import React, { Component, ReactElement } from "react";
import cn from "classnames";
import { Size } from "@advclb/design-system-base";

export interface ProductGridProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: Size;
}

export class ProductGrid extends Component<ProductGridProps> {
  render(): ReactElement {
    const { children, className, ...rest } = this.props;
    return (
      <div className={cn("ac-product-grid", className)} {...rest}>
        {children}
      </div>
    );
  }
}
