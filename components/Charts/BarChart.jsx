import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { map } from 'lodash';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({
  backgroundColor = ['#4B5563', '#ffc367', '#4f46e5'],
  borderColor = ['#4B5563', '#ffc367', '#4f46e5'],
  datasetsLabel = 'Comenzi',
  indexAxis = 'y',
  label = 'month',
  values = [],
}) => {
  const data = {
    datasets: [
      {
        backgroundColor,
        borderColor,
        data: map(values, 'count'),
        label: datasetsLabel,
      },
    ],
    labels: map(values, label),
  };

  const options = {
    elements: { bar: { borderWidth: 1 } },
    indexAxis,
    plugins: { legend: { display: false } },
    responsive: true,
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
