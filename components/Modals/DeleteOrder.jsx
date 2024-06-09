import { deleteOrder } from '@api/shop';
import { Button } from '@components';
import { toaster } from '@lib';
import { useRouter } from 'next/router';
import { Modal } from 'react-bootstrap';

const DeleteOrder = ({ id, isOpen, hide }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await deleteOrder(id);
      toaster.success('Comanda a fost ștearsă cu success');
      hide();
      router.push('/admin/orders/view-orders');
    } catch (e) {
      toaster.error('Comanda nu a putut fi ștearsă');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <Modal centered show={isOpen} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmă acțiunea</Modal.Title>
      </Modal.Header>
      <Modal.Body>Ești sigur că dorești să stergi această comandă?</Modal.Body>
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
            onClick={() => handleDelete(id)}
          >
            <i className="fa-solid fa-trash" />
            <span className="ml-2">Confirmă</span>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteOrder;
