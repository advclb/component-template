import React, { ReactElement } from "react";

export interface ReactDocProp {
  defaultValue: {
    value: string;
    computed: boolean;
  };
  required: boolean;
  tsType: {
    name: string;
  };
  description: string;
}

export interface ReactDocProps {
  [key: string]: ReactDocProp;
}

export interface PropsDocProps {
  props: ReactDocProps;
}

export function PropsDoc({ props }: PropsDocProps): ReactElement {
  return (
    <div>
      {Object.keys(props).map((key) => {
        const prop = props[key];
        return (
          <div key={key}>
            <h3>
              {key} <code>{prop.tsType}</code>
            </h3>
          </div>
        );
      })}
    </div>
  );
}
