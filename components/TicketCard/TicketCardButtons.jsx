import { Button } from '@components';
import { useProfile, useQuery } from '@hooks';
import { useState } from 'react';
import { TicketCardModals } from '.';

const TicketCardButtons = ({ assignedPerson, id }) => {
  const { me } = useProfile();
  const [modal, setModal] = useState('');
  const hideModal = () => setModal('');

  const { data } = useQuery(`/admin/tickets/${id}`);

  return (
    <>
      {data.status !== 'closed' && (
        <div className="flex my-4 flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 flex-col sm:flex-row">
            <Button
              className="button full bg-indigo-900 border-none text-white w-full sm:w-fit"
              onClick={() => setModal('assign')}
            >
              Desemnează persoană
            </Button>
            {(assignedPerson === undefined || me.me === assignedPerson?._id) && (
              <Button
                className="button full bg-primary border-none text-white w-full sm:w-fit"
                onClick={() => setModal('answer')}
              >
                Răspunde
              </Button>
            )}
          </div>
          {data.response && (
            <Button
              className="button full bg-accent border-none text-white h-9 mt-2 sm:mt-0 sm:w-fit"
              onClick={() => setModal('close')}
            >
              Inchide tichetul
            </Button>
          )}
        </div>
      )}
      <TicketCardModals modal={modal} hideModal={hideModal} id={id} />
    </>
  );
};

export default TicketCardButtons;
