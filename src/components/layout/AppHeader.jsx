import { Layout, Button, Select, Space, Modal, Drawer } from "antd";
import { useEffect, useState } from "react";
import { useCrypto } from "../../context/CryptoContext";
import CoinInfoModal from "../CoinInfoModal";
import AddAssetForm from "../AddAssetForm";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "60px",
  padding: "1rem",
  textAlign: "center",
};

const selectContainer = {
  width: "100%",
  alignItems: "start",
};

export default function AppHeader() {
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalCoin, setModalCoin] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const { crypto } = useCrypto();

  useEffect(() => {
    const keypress = (e) => {
      if (e.key === "/") {
        setSelect((prev) => !prev);
      }
    };

    document.addEventListener("keypress", keypress);

    return () => document.removeEventListener("keypress", keypress);
  }, []);

  const handleSelect = (value) => {
    setModalCoin(crypto.find((c) => c.id === value));
    setModal(true);
  };

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{
          width: "250px",
        }}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        open={select}
        value="press / to open"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space style={selectContainer}>
            <img src={option.data.icon} alt={option.data.label} style={{ width: "30px" }} />
            <span style={{ fontSize: "20px" }}>{option.data.label}</span>
          </Space>
        )}
      />
      <Modal open={modal} footer={null} onCancel={() => setModal(false)}>
        <CoinInfoModal coin={modalCoin} />
      </Modal>
      <Button type="default" onClick={() => setDrawer(true)}>
        Add Asset
      </Button>
      <Drawer destroyOnClose={true} onClose={() => setDrawer(false)} open={drawer} width="40%" title="Add Asset">
        <AddAssetForm onClose={() => setDrawer(false)} />
      </Drawer>
    </Layout.Header>
  );
}
