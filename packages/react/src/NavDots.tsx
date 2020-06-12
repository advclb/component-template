import React, { Component, ReactElement } from "react";
import cn from "classnames";

export interface NavDotsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  shape: "dot" | "dash";
  length: number;
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

export class NavDots extends Component<NavDotsProps> {
  static defaultProps: Partial<NavDotsProps> = {
    shape: "dot",
  };

  render(): ReactElement {
    const {
      shape,
      length,
      activeIndex,
      onActiveIndexChange,
      className,
      ...rest
    } = this.props;
    const items = [];
    for (let i = 0; i < length; i++) {
      items.push(
        <button
          className={cn("ac-nav-dots__item", "ac-nav-dots__item--" + shape, {
            "ac-nav-dots__item--active": i === activeIndex,
          })}
          onClick={(): void => {
            onActiveIndexChange(i);
          }}
        >
          <span className="ac-nav-dots__indicator" />
        </button>
      );
    }
    return (
      <div className={cn("ac-nav-dots", className)} {...rest}>
        {items}
      </div>
    );
  }
}
