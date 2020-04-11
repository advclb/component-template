import React, { ReactElement } from "react";
import cn from "classnames";

export type ButtonProps = {
  /** Flat button variation */
  flat?: boolean;
  /** Outline button variation */
  outline?: boolean;
  /** Primary button variantion */
  primary?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({
  children,
  className,
  flat,
  outline,
  primary,
  type = "button",
  ...rest
}: ButtonProps): ReactElement {
  return (
    <button
      className={cn("button", className, {
        "button--flat": flat,
        "button--outline": outline,
        "button--primary": primary,
      })}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
