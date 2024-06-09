import { Button } from '@components';
import {
  MessagesTableError,
  MessagesTableLoading,
  MessagesTableSuccess,
} from '@components/MessagesTable';
import { useInfiniteQuery } from '@hooks';

const DashboardTicketsTable = () => {
  const { data, status } = useInfiniteQuery('/admin/tickets', { per_page: 5 });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="text-lg font-medium">Tichete recente</h2>
        <Button
          href="/admin/tickets/view-tickets"
          className="button px-5 font-medium hover:text-gray-900 py-1.5 text-gray-600"
        >
          Vezi toate
          <i className="ml-2 text-xs fa-solid fa-arrow-right-long"></i>
        </Button>
      </div>
      <div className="grid gap-4 min-w-screen overflow-x-auto md:overflow-x-visible">
        <div className="max-w-full flex flex-col gap-4 w-full overflow-x-auto md:overflow-x-visible">
          {status === 'loading' && <MessagesTableLoading />}
          {status === 'error' && <MessagesTableError />}
          {status === 'success' && <MessagesTableSuccess {...data} />}
        </div>
      </div>
    </div>
  );
};

export default DashboardTicketsTable;
