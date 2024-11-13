import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useCrypto } from "../context/CryptoContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const pieStiles = {
  display: "flex",
  justifyContent: "center",
  height: "400px",
  marginBottom: "1rem",
};

export default function PortfolioChart() {
  const { assets } = useCrypto();
  const data = {
    labels: assets.map((asset) => asset.name),
    datasets: [
      {
        label: "$",
        data: assets.map((asset) => asset.totalAmount),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  return (
    <div style={pieStiles}>
      <Pie data={data} />
    </div>
  );
}
