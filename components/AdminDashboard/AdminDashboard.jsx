import { DashboardCharts, DashboardStats, DashboardTicketsTable } from '@components/Dashboard';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <DashboardStats url={'admin/stats'} />
      <DashboardCharts />
      <DashboardTicketsTable />
    </div>
  );
};

export default AdminDashboard;
