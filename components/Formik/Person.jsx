import { Person as AssignedPerson } from '@components/Fields';
import { useFormikContext } from 'formik';

const Person = ({ person, disabled }) => {
  const { setFieldValue } = useFormikContext();

  const handleSelect = (value) => {
    setFieldValue('assignedPerson', value);
  };
  return <AssignedPerson person={person} onSelect={handleSelect} disabled={disabled} />;
};

export default Person;
