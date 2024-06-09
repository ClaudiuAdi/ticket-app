import { useQuery } from '@hooks';
import { PieChart } from '.';
import DashboardPieSuccess from './DashboardPieChartSuccess';

const DashboardPieChart = () => {
  const { data, status } = useQuery(`admin/graph/payment-yearly`);

  return (
    <div className="grid place-items-center">
      <div className="w-60">
        {status === 'error' && (
          <div className="relative">
            <div className="absolute flex h-full w-full flex-col items-center justify-center font-semibold">
              <p className="text-4xl text-red-700 xl:text-5xl">0%</p>
            </div>
            <PieChart procent={0} />
          </div>
        )}
        {status === 'loading' && (
          <div className="relative">
            <div className="absolute flex h-full w-full flex-col items-center justify-center font-semibold">
              <p className="text-4xl text-secondary xl:text-5xl">0%</p>
            </div>
            <PieChart procent={0} />
          </div>
        )}
        {status === 'success' && <DashboardPieSuccess {...data} />}
      </div>
    </div>
  );
};

export default DashboardPieChart;
