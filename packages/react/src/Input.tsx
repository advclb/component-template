import React, {
  ReactElement,
  DetailedHTMLProps,
  InputHTMLAttributes,
  Component,
} from "react";
import cn from "classnames";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** Style variant */
  variant?: "underline" | "filled" | "outline";
}

export class Input extends Component<InputProps> {
  static defaultProps: Partial<InputProps> = {
    variant: "outline",
  };

  render(): ReactElement {
    const { className, variant, ...rest } = this.props;
    return (
      <input
        className={cn("ac-input", "ac-input--" + variant, className)}
        {...rest}
      />
    );
  }
}
