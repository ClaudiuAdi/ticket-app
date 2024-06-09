import { useProfile } from '@hooks';
import { AdminListTableHead } from '.';
import AdminListSuccessRow from './AdminListSuccessRow';

const AdminListSuccess = ({ data, refetch }) => {
  const { me } = useProfile();

  return (
    <div className="max-w-full flex flex-col gap-4 w-full overflow-x-auto md:overflow-x-visible pt-5">
      <table className="overflow-auto border-spacing-y-1 bg-white shadow-lg border">
        <AdminListTableHead />
        <tbody className="whitespace-nowrap text-sm text-gray-500">
          {data
            .filter((admin) => admin._id !== me.me)
            .map((admin) => {
              return <AdminListSuccessRow {...admin} key={admin._id} refetch={refetch} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminListSuccess;
