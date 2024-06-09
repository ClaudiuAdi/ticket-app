import { OrdersTableHeader, OrdersTableRow } from '.';

const OrdersTableSuccess = ({ pages, pageParams }) => {
  const showMessages = (message) => {
    return <OrdersTableRow key={`order-row-${message._id}`} {...message} />;
  };

  return (
    <>
      <table className="overflow-auto border-spacing-y-1 bg-white shadow-lg rounded-b">
        <OrdersTableHeader />
        <tbody>{pages?.map((page) => page.map(showMessages))}</tbody>
      </table>
      {!pageParams?.count && (
        <tbody>
          <tr className="whitespace-nowrap border text-sm text-gray-700">
            <td colSpan={5}>
              <p className="p-4 text-sm ">Niciun rezultat găsit</p>
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
};

export default OrdersTableSuccess;
