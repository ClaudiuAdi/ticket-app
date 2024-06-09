import { OrderStatusFilter } from '.';

const OrdersFilters = ({ setOptions }) => {
  return (
    <div className="flex md:flex-row flex-col gap-4 lg:w-3/4 w-full">
      <OrderStatusFilter setOptions={setOptions} />
    </div>
  );
};

export default OrdersFilters;
