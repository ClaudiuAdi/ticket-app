import { Dropdown } from '../Fields';

const OrderStatusFilter = ({ setOptions }) => {
  const searchByStatus = (status) => {
    if (status) {
      setOptions((prev) => ({ ...prev, status: status !== ' ' ? status : '' }));
    } else {
      setOptions(({ county, ...prev }) => prev);
    }
  };

  return (
    <div className="flex flex-col gap-2 lg:w-1/3 w-full">
      <div>Status comandă</div>
      <Dropdown placeholder="Caută după status" onSelect={searchByStatus}>
        <option value=" ">Toate</option>
        <option value="approved">Acceptat</option>
        <option value="pending">În proces</option>
        <option value="rejected">Respins</option>
      </Dropdown>
    </div>
  );
};

export default OrderStatusFilter;
