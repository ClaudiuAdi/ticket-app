import { generateHash } from '@functions';
import { useQuery } from '@hooks';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { Dropdown } from '../Fields';

const AssignedFilter = ({ initialValues }) => {
  const { data, status } = useQuery('/admin/identities');

  const [key, setKey] = useState(generateHash());

  const { setFieldValue, values } = useFormikContext();

  const searchByAssigned = (assignedPersonId) => {
    setFieldValue('assignedPersonId', assignedPersonId === 'Toate' ? undefined : assignedPersonId);
  };

  useEffect(() => {
    if (values.status === 'unassigned') {
      setKey(generateHash());
      setFieldValue('assignedPersonId', undefined);
    }
  }, [values]);

  return (
    <div className="flex flex-col gap-2 lg:w-1/3 w-full">
      <div>Persoană alocată</div>
      <Dropdown
        placeholder="Caută cui a fost alocat"
        onSelect={searchByAssigned}
        id={'allocatedDropdown'}
        defaultSelected={initialValues.assignedPersonId || ''}
        key={key}
        disabled={values.status === 'unassigned'}
      >
        <option value="">Toate</option>
        {status === 'success' &&
          data.map((identity) => {
            return (
              <option value={identity._id} key={identity._id}>
                {identity.name}
              </option>
            );
          })}
      </Dropdown>
    </div>
  );
};

export default AssignedFilter;
