import { Table } from "antd";
import { useCrypto } from "../context/CryptoContext";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sortDirections: ["descend"],
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Price, $",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.amount - b.amount,
  },
];

export default function AssetsTable() {
  const { assets } = useCrypto();

  const data = assets.map((asset) => {
    return {
      key: asset.id,
      name: asset.name,
      price: asset.price,
      amount: asset.amount,
    };
  });

  return <Table pagination={false} columns={columns} dataSource={data} />;
}
