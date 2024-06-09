import { AdminListTableHead } from '.';
import AdminListLoadingRow from './AdminListLoadingRow';

const AdminListLoading = () => {
  const mock = [1, 2, 3]; //mock data

  const showMock = (mock) => {
    return <AdminListLoadingRow key={`admin-list-loading-${mock}`} />;
  };

  return (
    <table className="border-collapse mt-4 border border-gray-200 rounded-lg shadow-md bg-white w-full">
      <AdminListTableHead />
      <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
        {mock.map(showMock)}
      </tbody>
    </table>
  );
};

export default AdminListLoading;
