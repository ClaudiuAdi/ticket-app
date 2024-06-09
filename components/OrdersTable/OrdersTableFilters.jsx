import { OrdersFilters } from '.';

const OrdersTableFilters = ({ setOptions }) => {
  return (
    <div className="bg-white rounded shadow-lg p-4 flex flex-col lg:gap-0 gap-4 justify-between">
      <section className="flex flex-wrap items-center gap-2 mb-4 border-b pb-4 -mx-4 px-4">
        <h3 className="text-indigo-900 text-lg md:text-xl flex-grow">Filtrează comenzile</h3>
      </section>
      <OrdersFilters setOptions={setOptions} />
    </div>
  );
};

export default OrdersTableFilters;
