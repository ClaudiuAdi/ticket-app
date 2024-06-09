import { Field } from 'formik';
import { Fieldset } from '../Formik';
import Select from './Select';

const SelectRole = () => {
  return (
    <Fieldset name="role" label="Rolul utilizatorului">
      <Field
        id="role"
        name="role"
        as={Select}
        className="mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
      >
        <option value="" disabled>
          Selecteaza rolul
        </option>
        <option value="admin">Administrator</option>
      </Field>
    </Fieldset>
  );
};

export default SelectRole;
