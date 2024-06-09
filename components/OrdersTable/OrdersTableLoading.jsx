import { OrdersTableHeader } from '.';
import { Bone } from '..';

const OrdersTableLoading = () => {
  const mock = [1, 2, 3]; //mock data

  const showMock = (mock) => {
    return (
      <tr className="whitespace-nowrap text-sm text-gray-500" key={`orders-loading-${mock}`}>
        <td className="sm:p-4 p-2">{mock}.</td>
        <td className="sm:p-4 p-2">
          <Bone type="loading" extraClass="w-full" />
        </td>
        <td className="sm:p-4 p-2">
          <Bone type="loading" extraClass="w-full" />
        </td>
        <td className="sm:p-4 p-2">
          <Bone type="loading" extraClass="w-full" />
        </td>
        <td className="sm:p-4 p-2">
          <Bone type="loading" extraClass="w-full" />
        </td>
      </tr>
    );
  };

  return (
    <table className="overflow-auto border-spacing-y-1 bg-white shadow-lg rounded-b">
      <OrdersTableHeader />
      <tbody className="bg-stripe">{mock.map(showMock)}</tbody>
    </table>
  );
};

export default OrdersTableLoading;
