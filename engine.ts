import { ratio } from "./math";
import { MAINTENANCE_MARGIN } from "../../sdk/constants";

export function getHealthFactor(collateral: number, exposure: number) {
  return ratio(collateral, exposure) * MAINTENANCE_MARGIN;
}

export function isLiquidatable(collateral: number, exposure: number) {
  return getHealthFactor(collateral, exposure) < 1;
}
