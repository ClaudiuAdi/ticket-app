import { AssignTicketForm } from '@components/Forms';
import { AssignTicketFormError, AssignTicketFormLoading } from '@components/SkeletonForms';
import { useQuery } from '@hooks';
import { Modal } from 'react-bootstrap';

const AssignTicket = ({ id, isOpen, hide }) => {
  const { data, status, refetch } = useQuery(`/admin/tickets/${id}`);

  return (
    <Modal centered show={isOpen} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Alocă o persoană tichetului</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {status === 'loading' && <AssignTicketFormLoading />}
        {status === 'error' && <AssignTicketFormError />}
        {status === 'success' && (
          <AssignTicketForm id={id} initialValues={data || {}} hide={hide} refetch={refetch} />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AssignTicket;
