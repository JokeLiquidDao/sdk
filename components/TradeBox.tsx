import { getHealthFactor } from "../../../programs/risk-engine/engine";

export const TradeBox = () => {
  const hf = getHealthFactor(100, 500);

  return (
    <div>
      <p>Collateral: 100</p>
      <p>Exposure: 500</p>
      <p>Health: {hf}</p>
    </div>
  );
};
