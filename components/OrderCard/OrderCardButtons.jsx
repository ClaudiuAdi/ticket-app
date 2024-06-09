import { Button } from '@components';
import { useQuery } from '@hooks';
import { useState } from 'react';
import { OrderCardModals } from '.';

const OrderCardButtons = ({ id }) => {
  const [modal, setModal] = useState('');
  const hideModal = () => setModal('');

  const { data } = useQuery(`/orders/${id}`);

  return (
    <>
      <div className="flex my-4 flex-col sm:flex-row sm:items-center sm:justify-between">
        {data.status === 'pending' && (
          <div className="flex gap-2 flex-col sm:flex-row">
            <Button
              className="button full bg-indigo-900 border-none text-white w-full sm:w-fit"
              onClick={() => setModal('approve')}
            >
              Aprobă comandă
            </Button>
            <Button
              className="button full bg-primary border-none text-white w-full sm:w-fit"
              onClick={() => setModal('reject')}
            >
              Respinge comandă
            </Button>
          </div>
        )}
        {data.status !== 'approved' && (
          <Button
            className="button full bg-accent border-none text-white h-9 mt-2 sm:mt-0 sm:w-fit"
            onClick={() => setModal('delete')}
          >
            Șterge comandă
          </Button>
        )}
      </div>
      <OrderCardModals modal={modal} hideModal={hideModal} id={id} />
    </>
  );
};

export default OrderCardButtons;
