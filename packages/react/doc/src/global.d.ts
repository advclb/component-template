declare module "!!raw-loader!*" {
  const contents: string;
  export = contents;
}

declare module "!!@advclb/react-docgen-loader!*" {
  const contents: {
    description: string;
    displayName: string;
    methods: [];
    props: {
      [key: string]: {
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
      };
    };
  };
  export = contents;
}
