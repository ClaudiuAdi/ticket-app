import { PieChart as Chart } from 'react-minimal-pie-chart';

const PieChart = ({ procent }) => {
  return (
    <Chart
      data={[
        { title: 'Total comenzi', value: 100 - procent, color: '#8B8EA5' },
        { title: 'Comenzi achitate', value: procent, color: '#4F46E5' },
      ]}
      lineWidth={36}
      startAngle={180}
    />
  );
};

export default PieChart;
