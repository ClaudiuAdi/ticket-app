import { rejectOrder } from '@api/shop';
import { Button } from '@components';
import { useQuery } from '@hooks';
import { toaster } from '@lib';
import { Modal } from 'react-bootstrap';

const RejectOrder = ({ id, isOpen, hide }) => {
  const { refetch } = useQuery(`/orders/${id}`);

  const handleReject = async (id) => {
    try {
      await rejectOrder(id);
      toaster.success('Comanda a fost respinsă cu success');
      refetch();
      hide();
    } catch (e) {
      toaster.error('Comanda nu a putut fi respinsă');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <Modal centered show={isOpen} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmă acțiunea</Modal.Title>
      </Modal.Header>
      <Modal.Body>Ești sigur că dorești să respingi această comandă?</Modal.Body>
      <Modal.Footer>
        <div className="w-full flex justify-between">
          <Button
            className="text-indigo-900 border-indigo-900 border-solid border-1 hover:text-white hover:bg-indigo-900 transition ease-in-out duration-150 p-1.5 rounded px-3 text-center"
            onClick={hide}
          >
            <i className="fas fa-arrow-left"></i>
            <span className="ml-2">Înapoi </span>
          </Button>
          <Button
            className="text-red-700 border-red-700 border-solid border-1 hover:text-white hover:bg-red-700 transition ease-in-out duration-150 p-1.5 rounded px-3 text-center"
            onClick={() => handleReject(id)}
          >
            <i className="fa-solid fa-check" />
            <span className="ml-2">Confirmă</span>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default RejectOrder;
