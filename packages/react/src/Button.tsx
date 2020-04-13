import React, {
  ReactElement,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  Component,
} from "react";
import cn from "classnames";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** HTML button type */
  type?: "button" | "submit" | "reset";
  /** Style variant */
  variant?: "flat" | "filled" | "outline";
  /** Color theme */
  theme?: "primary" | "secondary" | "danger";
  /** Task progress from 0 to 1 */
  progress?: number;
}

export class Button extends Component<ButtonProps> {
  static defaultProps: Partial<ButtonProps> = {
    type: "button",
    variant: "filled",
    theme: "secondary",
  };

  render(): ReactElement {
    const {
      children,
      className,
      variant,
      theme,
      progress,
      ...rest
    } = this.props;
    return (
      <button
        className={cn(
          "ac-button",
          "ac-button--" + variant,
          "ac-button--" + (rest.disabled ? "disabled" : theme),
          className
        )}
        {...rest}
      >
        {children}
        {progress && (
          <div
            className="ac-button__progress"
            style={{ width: progress * 100 + "%" }}
          ></div>
        )}
      </button>
    );
  }
}
