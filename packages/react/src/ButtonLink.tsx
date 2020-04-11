import React, { ReactElement } from "react";
import { Link, LinkProps } from "react-router-dom";
import cn from "classnames";

export type ButtonLinkProps = {
  /** Flat button variation */
  flat?: boolean;
  /** Outline button variation */
  outline?: boolean;
  /** Primary button variantion */
  primary?: boolean;
} & LinkProps;

export function ButtonLink({
  children,
  className,
  flat,
  outline,
  primary,
  ...rest
}: ButtonLinkProps): ReactElement {
  return (
    <Link
      className={cn("button", className, {
        "button--flat": flat,
        "button--outline": outline,
        "button--primary": primary,
      })}
      {...rest}
    >
      {children}
    </Link>
  );
}
