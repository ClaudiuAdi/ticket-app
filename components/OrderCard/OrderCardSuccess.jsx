import { OrderStatus } from '@components/OrdersTable';
import { dateLocaleRo } from '@functions';
import { OrderCardButtons } from '.';

const OrderCardSuccess = ({ _id, series, number, status, invoiceData, orderTicket, createdAt }) => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded shadow-lg p-4">
      <div className="flex gap-2 items-center mb-4">
        <p className="font-semibold text-2xl">{`${series}-${number}`}</p>
        <OrderStatus status={status} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="border-b">
            <p className="font-semibold mb-2">Nume și prenume</p>
            <p>{`${invoiceData.firstName} ${invoiceData.lastName}`}</p>
          </div>
          <div className="border-b">
            <p className="font-semibold mb-2">Dată plasării</p>
            <p>{dateLocaleRo(createdAt)}</p>
          </div>
          <div className="border-b">
            <p className="font-semibold mb-2">Dorință</p>
            <p>{orderTicket.motivation}</p>
          </div>
          <div className="border-b">
            <p className="font-semibold mb-2">Mesaj</p>
            <p className="break-keep">{orderTicket.message}</p>
          </div>
          <div className="border-b">
            <p className="font-semibold mb-2">Total</p>
            <p className="break-keep">{orderTicket.price}</p>
          </div>
        </div>
      </div>
      <OrderCardButtons id={_id} />
    </div>
  );
};

export default OrderCardSuccess;
