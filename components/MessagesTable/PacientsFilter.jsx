import Search from '@components/Fields/Search';
import { useFormikContext } from 'formik';

const PacientsFilter = ({ initialValues }) => {
  const { setFieldValue } = useFormikContext();

  const searchByEmail = (ticketEmail) => {
    setFieldValue('ticketEmail', ticketEmail === '' ? undefined : ticketEmail);
  };

  return (
    <div className="flex flex-col gap-2 lg:w-1/3 w-full">
      <div>E-mail client</div>
      <Search
        placeholder="Caută client"
        setSearch={searchByEmail}
        defaultValue={initialValues.ticketEmail || ''}
      />
    </div>
  );
};

export default PacientsFilter;
