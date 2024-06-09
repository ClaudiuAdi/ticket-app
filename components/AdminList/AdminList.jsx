import AdminListLoading from './AdminListLoading';
import AdminListError from './AdminListError';
import AdminListSuccess from './AdminListSuccess';

const AdminList = ({ data, status, refetch }) => {
  return (
    <section className="grid gap-4 min-w-screen overflow-x-auto md:overflow-x-visible">
      {status === 'loading' && <AdminListLoading />}
      {status === 'error' && <AdminListError />}
      {status === 'success' && <AdminListSuccess data={data} refetch={refetch} />}
    </section>
  );
};

export default AdminList;
