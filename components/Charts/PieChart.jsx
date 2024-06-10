import { PieChart as Chart } from 'react-minimal-pie-chart';

const PieChart = ({ procent }) => {
  return (
    <Chart
      data={[
        { title: 'Total tickete', value: 100 - procent, color: '#8B8EA5' },
        { title: 'Tickete rezolvate', value: procent, color: '#4F46E5' },
      ]}
      lineWidth={36}
      startAngle={180}
    />
  );
};

export default PieChart;
