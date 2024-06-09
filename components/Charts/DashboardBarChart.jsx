import { useQuery } from '@hooks';
import { BarChart } from '.';

const DashboardBarChart = ({ query, ...props }) => {
  const { data, status } = useQuery(query);

  return (
    <>
      {status === 'error' && <BarChart {...props} />}
      {status === 'loading' && <BarChart {...props} />}
      {status === 'success' && <BarChart values={data.monthlyOrders} {...props} />}
    </>
  );
};

export default DashboardBarChart;
