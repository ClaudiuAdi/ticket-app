import { Password } from '@components/Fields';
import { Fieldset } from '@components/Formik';
import { Field } from 'formik';

const NewPasswordField = () => {
  return (
    <Fieldset name="newPassword" label="Parolă nouă">
      <Field
        as={Password}
        name="newPassword"
        id="newPassword"
        className="backoffice-input text-black"
      />
    </Fieldset>
  );
};

export default NewPasswordField;
