import React, { ReactElement, Component } from "react";
import { Link, LinkProps } from "react-router-dom";
import cn from "classnames";

export interface ButtonLinkProps extends LinkProps {
  /** Style variant */
  variant?: "flat" | "filled" | "outline";
}

export class ButtonLink extends Component<ButtonLinkProps> {
  static defaultProps: Partial<ButtonLinkProps> = {
    variant: "outline",
  };
  render(): ReactElement {
    const { children, className, variant, ...rest } = this.props;
    return (
      <Link
        className={cn("ac-button", "ac-button--" + variant, className)}
        {...rest}
      >
        {children}
      </Link>
    );
  }
}
