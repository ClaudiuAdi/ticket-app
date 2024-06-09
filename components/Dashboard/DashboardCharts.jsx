import { DashboardOrdersPerMonth } from '@components/AdminDashboard';
import { DashboardPieChart } from '@components/Charts';

const DashboardCharts = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium">Statistici comenzi</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardOrdersPerMonth />
        <div className="flex flex-col justify-between rounded-md bg-white p-4 shadow-lg">
          <div className="flex-grow">
            <div className="mb-4 text-center">
              <h3 className="text-lg mb-10">Comenzi achitate {new Date().getFullYear()}</h3>
            </div>
            <div className="mx-auto w-full max-w-sm px-6">
              <DashboardPieChart role="admin" />
            </div>
            <ul className="flex flex-col sm:flex-row gap-2 mt-5 text-sm items-center place-content-center">
              <li>
                <span className="mr-1 text-indigo-600">&#9679;</span>
                <span className="text-gray-700">Comenzi achitate</span>
              </li>
              <li>
                <span className="mr-1 text-gray-400">&#9679;</span>
                <span className="text-gray-700">Comenzi neachitate</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
