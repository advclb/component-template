import React, {
  Component,
  ReactElement,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import cn from "classnames";

export interface CollapseProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
}

export class Collapse extends Component<CollapseProps> {
  private static defaultProps: Partial<CollapseProps> = {
    open: false,
  };

  root = React.createRef<HTMLDivElement>();
  inner = React.createRef<HTMLDivElement>();

  timeout?: number;

  componentDidMount(): void {
    if (this.root.current) {
      const { open } = this.props;

      if (!open) {
        this.root.current.style.height = "0";
        this.root.current.style.overflow = "hidden";
      }
    }
  }

  componentDidUpdate(): void {
    clearTimeout(this.timeout);
    if (this.root.current) {
      const { open } = this.props;
      const currentHeight = this.root.current?.clientHeight || 0;
      const speed = 1200;

      if (open) {
        const targetHeight = this.inner.current?.clientHeight || 0;
        const duration = (targetHeight - currentHeight) / speed;

        this.root.current.style.transitionDuration = duration + "s";
        this.root.current.style.height = targetHeight + "px";

        // reset to auto height after transition finished
        this.timeout = window.setTimeout(() => {
          if (this.root.current) {
            this.root.current.style.height = "auto";
            this.root.current.style.overflow = "";
          }
        }, duration * 1000);
      } else {
        const targetHeight = 0;
        const duration = (currentHeight - targetHeight) / speed;
        this.root.current.style.transitionDuration = duration + "s";

        // set initial height, otherwise the transition won't work smoothly
        this.root.current.style.height = currentHeight + "px";
        this.root.current.style.overflow = "hidden";

        // have to use a short timeout to trigger the transition
        window.setTimeout(() => {
          if (this.root.current) {
            this.root.current.style.height = "0";
          }
        }, 1);
      }
    }
  }

  render(): ReactElement {
    const { open, children, className, ...rest } = this.props;

    return (
      <div ref={this.root} className={cn("ac-collapse", className)} {...rest}>
        <div className="ac-collapse__inner" ref={this.inner}>
          {children}
        </div>
      </div>
    );
  }
}
