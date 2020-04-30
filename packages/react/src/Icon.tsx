import React, { ReactElement } from "react";
import cn from "classnames";
import { Direction } from "@advclb/design-system-base";
import { IconData } from "@advclb/design-system-icons";

export type IconProps = {
  data: IconData;
  direction: Direction;
};

export function Icon({ data, direction = "right" }: IconProps): ReactElement {
  return (
    <svg
      className={cn("ac-icon", "ac-icon--" + direction)}
      viewBox={`0 0 ${data.width} ${data.height}`}
      aria-label={data.name}
    >
      {data.paths.map((p, i) => (
        <path key={i} {...p} />
      ))}
    </svg>
  );
}
