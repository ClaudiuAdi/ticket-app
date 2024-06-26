import { MessagesTableHeader } from '.';
import { Bone } from '..';

const MessagesTableLoading = () => {
  const mock = [1, 2, 3]; //mock data

  const showMock = (mock) => {
    return (
      <tr className="whitespace-nowrap text-sm text-gray-500" key={`tickets-loading-${mock}`}>
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
        <td className="sm:p-4 p-2">
          <Bone type="loading" extraClass="w-full" />
        </td>
      </tr>
    );
  };

  return (
    <table className="overflow-auto border-spacing-y-1 bg-white shadow-lg rounded-b">
      <MessagesTableHeader />
      <tbody className="bg-stripe">{mock.map(showMock)}</tbody>
    </table>
  );
};

export default MessagesTableLoading;
/* auto-generated by robocode v0.4.3 */
