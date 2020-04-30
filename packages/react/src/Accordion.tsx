import React, {
  ReactElement,
  DetailedHTMLProps,
  HTMLAttributes,
  Component,
  ReactNode,
} from "react";
import cn from "classnames";
import { UP, DOWN } from "@advclb/design-system-base";
import chevron from "@advclb/design-system-icons/chevron.json";
import { Collapse } from "./Collapse";
import { Icon } from "./Icon";

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
        <button className="ac-accordion__header" onClick={computedToggle}>
          <div className="ac-accordion__header-inner">{header}</div>
          <div className="ac-accordion__header-close">
            <Icon data={chevron} direction={computedOpen ? UP : DOWN} />
          </div>
        </button>
        <Collapse className="ac-accordion__content" open={computedOpen}>
          {children}
        </Collapse>
      </div>
    );
  }
}
