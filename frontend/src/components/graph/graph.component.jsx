import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./graph.style.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const data = {
    labels: [
      "4 Nov", "5 Nov", "6 Nov", "7 Nov", "8 Nov", "9 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov", "19 Nov", "20 Nov", "21 Nov", "22 Nov", "23 Nov", "24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov", "29 Nov",
    ],
    datasets: [
      // {
      //   label: "INR Value",
      //   data: [100, 430, 285, 335, 199, 255, 216, 105, 135, 125, 235, 565, 322, 254, 125, 115, 205, 220],
      //   borderColor: "#8979FF",
      // },
      {
        label: "INR Value",
        data: [84.1525, 84.1163, 84.2512, 84.3064, 84.3829, 84.3859, 84.3900, 84.3965, 84.3953, 84.4230, 84.4738, 84.4775, 84.4553, 84.4123, 84.3985, 84.3976, 84.3831, 84.4883, 84.4360, 84.3775, 84.3391, 84.4203, 84.4719, 84.5667, 84.4203, 84.6252],
        borderColor: "#FF928A",
      },
    ],
  };

  return (
    <div className="line-chart-container">
      <Line className="line-chart-main" options={options} data={data} />
    </div>
  );
};

export default Graph;