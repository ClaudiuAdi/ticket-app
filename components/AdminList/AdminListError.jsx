import { toaster } from '@lib';
import { useEffect } from 'react';
import { AdminListTableHead } from '.';
import AdminListErrorRow from './AdminListErrorRow';

const AdminListError = () => {
  const mock = [1, 2, 3]; //mock data

  const showMock = (mock) => {
    return <AdminListErrorRow key={`admin-list-error-${mock}`} />;
  };

  useEffect(() => {
    return toaster.error('Eroare! Datele nu au putut fi încărcate!');
  }, []);

  return (
    <table className="border-collapse mt-4 border border-gray-200 rounded-lg m-8 shadow-md bg-white w-full">
      <AdminListTableHead />
      <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
        {mock.map(showMock)}
      </tbody>
    </table>
  );
};

export default AdminListError;
