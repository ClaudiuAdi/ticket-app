import { AnswerTicket } from '@components/Modals';

const TicketCardModals = ({ modal, hideModal, id }) => {
  return (
    <>
      {modal === 'answer' && <AnswerTicket id={id} isOpen={modal === 'answer'} hide={hideModal} />}
    </>
  );
};

export default TicketCardModals;
