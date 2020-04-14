import React, {
  ReactElement,
  DetailedHTMLProps,
  HTMLAttributes,
  Component,
  ReactNode,
} from "react";
import cn from "classnames";
import { Collapse } from "./Collapse";

export interface AccordionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  initialOpen?: boolean;
  onToggle?: (open: boolean) => void;
  header: ReactNode;
}

interface AccordionState {
  internalOpen: boolean;
}

export class Accordion extends Component<AccordionProps, AccordionState> {
  state: AccordionState = { internalOpen: this.props.initialOpen || false };

  render(): ReactElement {
    const {
      children,
      className,
      open,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      initialOpen,
      onToggle,
      header,
      ...rest
    } = this.props;
    const { internalOpen } = this.state;

    let computedOpen, computedToggle;
    if (onToggle !== undefined && open !== undefined) {
      computedOpen = open;
      computedToggle = (): void => {
        onToggle(!open);
      };
    } else {
      computedOpen = internalOpen;
      computedToggle = (): void => {
        this.setState({ internalOpen: !internalOpen });
      };
    }

    return (
      <div className={cn("ac-accordion", className)} {...rest}>
        <div className="ac-accordion__header">
          <div className="ac-accordion__header-inner">{header}</div>
          <button
            className="ac-accordion__header-close"
            onClick={computedToggle}
          >
            toggle
          </button>
        </div>
        <Collapse className="ac-accordion__content" open={computedOpen}>
          {children}
        </Collapse>
      </div>
    );
  }
}
