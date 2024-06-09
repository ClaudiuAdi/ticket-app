import { ApproveOrder, DeleteOrder, RejectOrder } from '@components/Modals';

const OrderCardModals = ({ modal, hideModal, id }) => {
  return (
    <>
      {modal === 'approve' && (
        <ApproveOrder id={id} isOpen={modal === 'approve'} hide={hideModal} />
      )}
      {modal === 'reject' && <RejectOrder id={id} isOpen={modal === 'reject'} hide={hideModal} />}
      {modal === 'delete' && <DeleteOrder id={id} isOpen={modal === 'delete'} hide={hideModal} />}
    </>
  );
};

export default OrderCardModals;
