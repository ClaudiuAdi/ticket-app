import {
  UpdateAdminFormError,
  UpdateAdminFormLoading,
  UpdateAdminFormSuccess,
} from '@components/Forms';
import { useQuery } from '@hooks';
import { Modal } from 'react-bootstrap';

const EditAdmin = ({ isOpen, hide, id }) => {
  const { data, status, refetch } = useQuery(`/admin/identities/${id}`);

  return (
    <Modal centered show={isOpen} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizează utilizator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {status === 'loading' && <UpdateAdminFormLoading />}
        {status === 'error' && <UpdateAdminFormError />}
        {status === 'success' && (
          <UpdateAdminFormSuccess id={id} data={data} hide={hide} refetch={refetch} />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default EditAdmin;
