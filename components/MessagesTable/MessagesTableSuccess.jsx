import { MessagesTableHeader, MessagesTableRow } from '.';

const MessagesTableSuccess = ({ pages, pageParams }) => {
  const showMessages = (message) => {
    return <MessagesTableRow key={`message-row-${message._id}`} {...message} />;
  };

  return (
    <>
      <table className="overflow-auto border-spacing-y-1 bg-white shadow-lg border">
        <MessagesTableHeader />
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

export default MessagesTableSuccess;
/* auto-generated by robocode v0.4.3 */
