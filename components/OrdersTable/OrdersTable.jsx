import { OrdersTableError, OrdersTableLoading, OrdersTableSuccess } from '.';
import { LoadMoreOnClick } from '@components/Buttons';
import { useInfiniteQuery } from '@hooks';
import OrdersTableFilters from './OrdersTableFilters';

const OrdersTable = ({ options, setOptions }) => {
  const { data, status, ...props } = useInfiniteQuery('/admin/orders', options);

  return (
    <article className="flex flex-col gap-4">
      <OrdersTableFilters setOptions={setOptions} />
      <div className="grid gap-4 min-w-screen overflow-x-auto md:overflow-x-visible">
        <div className="max-w-full flex flex-col gap-4 w-full overflow-x-auto md:overflow-x-visible">
          {status === 'loading' && <OrdersTableLoading />}
          {status === 'error' && <OrdersTableError />}
          {status === 'success' && (
            <>
              <OrdersTableSuccess {...data} />
              <div className="sm:p-4 px-4">
                <LoadMoreOnClick {...props} className="button full primary px-5 py-1.5 text-black">
                  Încarcă mai mult{' '}
                </LoadMoreOnClick>
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default OrdersTable;
