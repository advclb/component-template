import React, { Component, ReactElement } from "react";
import cn from "classnames";

export interface SliderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  length: number;
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

export class Slider extends Component<SliderProps> {
  render(): ReactElement {
    const {
      length,
      activeIndex,
      onActiveIndexChange, // eslint-disable-line @typescript-eslint/no-unused-vars
      className,
      children, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...rest
    } = this.props;
    const items = [];
    for (let i = 0; i < length; i++) {
      items.push(
        <span
          className={cn("ac-nav-dots__item", {
            "ac-nav-dots__item--active": i === activeIndex,
          })}
        />
      );
    }
    return (
      <div className={cn("ac-nav-dots", className)} {...rest}>
        {items}
      </div>
    );
  }
}
