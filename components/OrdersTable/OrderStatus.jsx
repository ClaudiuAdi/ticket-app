import { classnames } from '../../lib';

const OrderStatus = ({ status }) => {
  return (
    <p
      className={classnames(
        'w-[70px] px-2 py-1 text-xs text-white rounded-xl text-center',
        status === 'approved' && (status = 'Aprobată') && 'bg-green-600',
        status === 'pending' && (status = 'În proces') && 'bg-yellow-600',
        status === 'rejected' && (status = 'Respinsă') && ' bg-red-600'
      )}
    >
      {status}
    </p>
  );
};

export default OrderStatus;
