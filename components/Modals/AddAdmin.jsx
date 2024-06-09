import { AddAdminForm } from '@components/Forms';
import { Modal } from 'react-bootstrap';

const AddAdmin = ({ isOpen, hide, refetch }) => {
  return (
    <Modal centered show={isOpen} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Adaugă utilizator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddAdminForm hide={hide} refetch={refetch} />
      </Modal.Body>
    </Modal>
  );
};

export default AddAdmin;
