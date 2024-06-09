import { Button } from '@components';
import {} from '@components/MessagesTable';
import { OrdersTableError, OrdersTableLoading, OrdersTableSuccess } from '@components/OrdersTable';
import { useInfiniteQuery, useProfile } from '@hooks';

const DashboardOrdersTable = () => {
  const { data, status } = useInfiniteQuery('/admin/orders', { per_page: 5 });
  const { me } = useProfile();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-indigo-900 text-xl font-semibold">Comenzi recente</h2>
        <Button
          href={`/${me?.role}/orders/view-orders`}
          className="button mini px-5 py-1.5 text-black bg-white border-black"
        >
          Vezi toate
        </Button>
      </div>
      <div className="grid gap-4 min-w-screen overflow-x-auto md:overflow-x-visible">
        <div className="max-w-full flex flex-col gap-4 w-full overflow-x-auto md:overflow-x-visible">
          {status === 'loading' && <OrdersTableLoading />}
          {status === 'error' && <OrdersTableError />}
          {status === 'success' && <OrdersTableSuccess data={data} />}
        </div>
      </div>
    </div>
  );
};

export default DashboardOrdersTable;
