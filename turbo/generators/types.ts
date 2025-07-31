export type ComponentTokenData = {
  displayName: string;
  tokenSetName: string;
  tokens: TokenElement[];
};

export type TokenElement = {
  tokenName: string;
  tokenNameSuffix: string;
  displayName: string;
  tokenValueType: TokenValueType;
  data: Data;
};

export type Data = {
  token: DataToken;
};

export type DataToken = {
  tokenName?: string;
  state: "ACTIVE";
  length?: Length;
  opacity?: number;
  type?: Type;
};

export type Length = {
  value: number;
  unit: string;
};

export enum TokenValueType {
  Color = "COLOR",
  Duration = "DURATION",
  Elevation = "ELEVATION",
  Length = "LENGTH",
  Opacity = "OPACITY",
  Shape = "SHAPE",
  Typography = "TYPOGRAPHY",
}

export type Type = {
  fontNameTokenName: string;
  fontWeightTokenName: string;
  fontSizeTokenName: string;
  fontTrackingTokenName: string;
  lineHeightTokenName: string;
};
