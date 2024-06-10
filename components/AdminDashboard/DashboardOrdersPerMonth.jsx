import { DashboardBarChart } from '../Charts';

const DashboardOrdersPerMonth = () => {
  return (
    <div className="h-full rounded-md bg-white p-4 shadow-lg">
      <h3 className="text-lg text-center">Tickete în ultimele 3 luni</h3>
      <div className="mx-auto w-full">
        <DashboardBarChart query="admin/graph/orders-monthly" />
      </div>
    </div>
  );
};

export default DashboardOrdersPerMonth;
