import { FiltersForm } from '@components/Filters';
import { useRouter } from 'next/router';
import { AssignedFilter, PacientsFilter, StatusFilter } from '.';

const MessagesFilters = ({ setOptions }) => {
  const router = useRouter();

  const initialValues = {
    ticketEmail: router.query.ticketEmail || '',
    assignedPersonId: router.query.assignedPersonId || '',
    status: router.query.status || '',
    per_page: router.query.per_page || '',
  };

  return (
    <FiltersForm initialValues={initialValues} setOptions={setOptions}>
      <div className="flex md:flex-row flex-col gap-4 lg:w-3/4 w-full">
        <PacientsFilter initialValues={initialValues} />
        <AssignedFilter initialValues={initialValues} />
        <StatusFilter initialValues={initialValues} />
      </div>
    </FiltersForm>
  );
};

export default MessagesFilters;
