import { OrderStatus } from '.';
import { Link } from '..';
import { dateLocaleRo } from '../../functions';

const OrdersTableRow = ({ number, series, _id, invoiceData, orderTicket, status }) => {
  return (
    <tr className="whitespace-nowrap text-sm text-gray-500">
      <td className="sm:p-4 p-2 sm:pr-14">
        <Link href="/admin/orders/[uuid]" as={`/admin/orders/${_id}`}>
          <h4 className="font-medium truncate text-black hover:text-primary">
            {`${series}-${number}`}
          </h4>
        </Link>
      </td>
      <td className="sm:p-4 p-2">{`${invoiceData.firstName} ${invoiceData.lastName}`}</td>
      <td className="sm:p-4 p-2">{dateLocaleRo(orderTicket.dateReceived)}</td>
      <td className="sm:p-4 p-2">{orderTicket.price}</td>
      <td className="sm:p-4 p-2">
        <OrderStatus status={status} />
      </td>
    </tr>
  );
};

export default OrdersTableRow;
