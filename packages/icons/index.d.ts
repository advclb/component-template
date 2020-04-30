export type IconPath = {
  d: string;
  fill?: string;
};

export type IconData = {
  name: string;
  width: number;
  height: number;
  paths: IconPath[];
};

declare module "*.json" {
  const x: IconData;
  export default x;
}
