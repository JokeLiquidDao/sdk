export type Asset = "SOL" | "JOKELIQUID";

export interface PositionParams {
  collateral: number;
  leverage: number;
  asset: Asset;
}
