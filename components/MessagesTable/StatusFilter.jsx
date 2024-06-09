import { useFormikContext } from 'formik';
import { Dropdown } from '../Fields';

const StatusFilter = ({ initialValues }) => {
  const { setFieldValue } = useFormikContext();

  const searchByStatus = (status) => {
    setFieldValue('status', status === 'Toate' ? undefined : status);
  };

  return (
    <div className="flex flex-col gap-2 lg:w-1/3 w-full">
      <div>Status tichet</div>
      <Dropdown
        placeholder="Caută după status"
        onSelect={searchByStatus}
        id={'statusDropdown'}
        defaultSelected={initialValues.status || ''}
      >
        <option value="">Toate</option>
        <option value="unassigned">Nealocat</option>
        <option value="in progress">În proces</option>
        <option value="closed">Închis</option>
      </Dropdown>
    </div>
  );
};

export default StatusFilter;
