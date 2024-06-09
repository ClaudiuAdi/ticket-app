import { EditAdmin } from '@components/Modals';
import { useState } from 'react';
import { AdminRowContextMenu } from '.';

const AdminRowActions = ({ id, refetch }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [modal, setModal] = useState('');

  const hideModal = () => {
    setModal('');
    refetch();
  };

  return (
    <div className="flex items-center gap-4 relative justify-center">
      <div
        onClick={() => setShowContextMenu(true)}
        className="hidden md:flex items-center cursor-pointer px-4"
        role="button"
      >
        <i className="fa-solid fa-ellipsis-vertical" />
      </div>
      {showContextMenu && (
        <div className="absolute top-0 right-2 bg-white rounded-lg shadow-xl z-50 border">
          <AdminRowContextMenu id={id} setModal={setModal} hide={() => setShowContextMenu(false)} />
        </div>
      )}
      {modal === 'edit' && <EditAdmin isOpen={modal === 'edit'} hide={hideModal} id={id} />}
    </div>
  );
};

export default AdminRowActions;
