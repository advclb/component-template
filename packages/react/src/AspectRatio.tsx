import React, { Component, ReactElement } from "react";
import cn from "classnames";

export interface AspectRatioProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /** The aspect ratio = width / height. */
  ratio: number;
}

export class AspectRatio extends Component<AspectRatioProps> {
  render(): ReactElement {
    const { ratio, children, className, ...rest } = this.props;
    return (
      <div className={cn("ac-aspect-ratio", className)} {...rest}>
        <div
          className="ac-aspect-ratio__sizer"
          style={{ paddingBottom: 100 / ratio + "%" }}
        >
          {children}
        </div>
      </div>
    );
  }
}
