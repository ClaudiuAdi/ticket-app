import { OrderCardError, OrderCardLoading, OrderCardSuccess } from '.';
import { useQuery } from '../../hooks';

const OrderCard = ({ uuid }) => {
  const { data, status } = useQuery(`/orders/${uuid}`);

  return (
    <>
      {status === 'loading' && <OrderCardLoading />}
      {status === 'error' && <OrderCardError />}
      {status === 'success' && <OrderCardSuccess {...data} />}
    </>
  );
};

export default OrderCard;
