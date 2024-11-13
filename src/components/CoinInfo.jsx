import { Flex, Typography } from "antd";

export default function CoinInfo({ coin, withSymbol }) {
  return (
    <Flex align="center">
      <img src={coin.icon} alt={coin.name} style={{ width: "40px", marginRight: "10px" }} />
      <Typography.Title level={2} style={{ margin: "0" }}>
        {coin.name} {withSymbol && `(${coin.symbol})`}
      </Typography.Title>
    </Flex>
  );
}
