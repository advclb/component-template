import React, { Component, ReactElement } from "react";
import cn from "classnames";
import { AspectRatio } from "./AspectRatio";

export interface ProductCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  cover: string;
  name: string;
  price: string;
}

export class ProductCard extends Component<ProductCardProps> {
  render(): ReactElement {
    const { cover, name, price, className, ...rest } = this.props;
    return (
      <div className={cn("ac-product-card", className)} {...rest}>
        <AspectRatio className="ac-product-card__head" ratio={1}>
          <img className="ac-product-card__cover" src={cover} alt={name} />
        </AspectRatio>
        <div className="ac-product-card__body">
          <div className="ac-product-card__name">{name}</div>
          <div className="ac-product-card__price">{price}</div>
        </div>
        <div className="ac-product-card__foot">
          <div className="ac-product-card__name">{name}</div>
        </div>
      </div>
    );
  }
}
