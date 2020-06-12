import React, { ReactElement, Component, Children, createRef } from "react";
import cn from "classnames";

export interface SlidesProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactElement[];
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
  align?: "left" | "right" | "center";
}

export class Slides extends Component<SlidesProps> {
  scrollEndTimeout?: number = undefined;
  root = createRef<HTMLDivElement>();

  componentDidMount(): void {
    if (typeof this.props.activeIndex === "number") {
      this.scrollToIndex(this.props.activeIndex);
    }
  }

  componentDidUpdate(): void {
    if (typeof this.props.activeIndex === "number") {
      this.scrollToIndex(this.props.activeIndex);
    }
  }

  scrollToIndex(index: number): void {
    const root = this.root.current;
    const items = root?.children;
    if (!root || !items?.length) {
      return;
    }
    let distance = 0;
    for (let i = 0; i < index; i++) {
      const item = items.item(i) as HTMLElement;
      distance += item.clientWidth;
    }
    root.scroll({ left: distance });
  }

  getActiveIndex(): number {
    const root = this.root.current;
    const items = root?.children;
    if (!root || !items?.length) {
      return 0;
    }
    let distance = 0;
    for (let i = 0; i < items.length; i++) {
      if (root.scrollLeft <= distance) {
        return i;
      }
      const item = items.item(i) as HTMLElement;
      distance += item.clientWidth;
    }
    return items.length - 1;
  }

  handleScroll = (): void => {
    window.clearTimeout(this.scrollEndTimeout);
    this.scrollEndTimeout = window.setTimeout(() => {
      const index = this.getActiveIndex();
      if (this.props.onActiveIndexChange && this.props.activeIndex !== index) {
        this.props.onActiveIndexChange(index);
      }
    }, 200);
  };

  render(): ReactElement {
    const {
      children,
      className,
      activeIndex,
      onActiveIndexChange: onActiveIndexChanged, // eslint-disable-line @typescript-eslint/no-unused-vars
      align = "left",
      ...rest
    } = this.props;
    return (
      <div
        ref={this.root}
        className={cn("ac-slides", "ac-slides--" + align, className)}
        {...rest}
        onScroll={this.handleScroll}
      >
        {Children.map(children, (child, index) => (
          <div
            key={index}
            className={cn("ac-slides__item", {
              "ac-slides__item--active": index === activeIndex,
            })}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
}
