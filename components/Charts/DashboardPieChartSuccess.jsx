import { percent } from '@functions';
import { PieChart } from '.';

const DashboardPieSuccess = ({ paid, total }) => {
  const procent = percent(paid, total);

  return (
    <div className="relative">
      <div className="absolute flex h-full w-full flex-col items-center justify-center font-semibold">
        <p className="text-4xl text-indigo-600 xl:text-5xl">{procent}%</p>
      </div>
      <PieChart procent={procent} />
    </div>
  );
};

export default DashboardPieSuccess;
