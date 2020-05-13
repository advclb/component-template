import React, { ReactElement } from "react";

export interface ReactDocProp {
  defaultValue: {
    value: string;
    computed: boolean;
  };
  required: boolean;
  tsType?: {
    name?: string;
    raw?: string;
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
      <h2>Properties</h2>
      {Object.keys(props).map((key) => {
        const prop = props[key];
        return (
          <div key={key}>
            <h3>{key}</h3>
            <p>{prop?.description}</p>
            <dl>
              <dt>Type</dt>
              <dd>
                <code>{prop?.tsType?.raw || prop?.tsType?.name}</code>
              </dd>

              {prop.defaultValue && (
                <>
                  <dt>Default</dt>
                  <dd>
                    <code>{prop?.defaultValue?.value}</code>
                  </dd>
                </>
              )}
              {prop.required && (
                <>
                  <dt>
                    <strong>Required</strong>
                  </dt>
                  <dd>Yes</dd>
                </>
              )}
            </dl>
          </div>
        );
      })}
    </div>
  );
}
