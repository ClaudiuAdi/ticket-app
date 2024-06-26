import { LoadMoreOnClick } from '@components/Buttons';
import { useInfiniteQuery } from '@hooks';
import {
  MessagesTableError,
  MessagesTableFilters,
  MessagesTableLoading,
  MessagesTableSuccess,
} from '.';

const MessagesTable = ({ options, setOptions }) => {
  const { data, status, ...props } = useInfiniteQuery('/admin/tickets', options);

  return (
    <div className="flex flex-col gap-4">
      <MessagesTableFilters setOptions={setOptions} />
      <div className="grid gap-4 min-w-screen overflow-x-auto md:overflow-x-visible">
        <div className="max-w-full flex flex-col gap-4 w-full overflow-x-auto md:overflow-x-visible">
          {status === 'loading' && <MessagesTableLoading />}
          {status === 'error' && <MessagesTableError />}
          {status === 'success' && (
            <>
              <MessagesTableSuccess {...data} />
              <div>
                <LoadMoreOnClick
                  {...props}
                  className="button full rounded-full bg-indigo-500 px-5 py-2 text-white uppercase"
                >
                  Încarcă mai mult
                </LoadMoreOnClick>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesTable;
/* auto-generated by robocode v0.4.3 */
