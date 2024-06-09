import { useState } from 'react';
import { EditAdmin } from '@components/Modals';

const AdminListSuccessRow = ({ _id, name, email, role, refetch }) => {
  const [modal, setModal] = useState('');

  const hideModal = () => {
    setModal('');
    refetch();
  };

  return (
    <tr className="whitespace-nowrap border text-sm text-gray-700">
      <td className="p-4 px-2 sm:px-8 font-medium">{name.toUpperCase()}</td>
      <td className="p-4 px-2 sm:px-4">{email}</td>
      <td className="p-4 px-2 sm:px-4">{role}</td>
      <td className="p-3 w-16">
        <button
          className="px-4 py-2 text-gray-600 flex items-center rounded-full no-underline"
          type="button"
          onClick={() => setModal('edit')}
        >
          <i className="text-base fa-solid fa-pen"></i>
        </button>
      </td>
      {modal === 'edit' && <EditAdmin isOpen={modal === 'edit'} hide={hideModal} id={_id} />}
    </tr>
  );
};

export default AdminListSuccessRow;
