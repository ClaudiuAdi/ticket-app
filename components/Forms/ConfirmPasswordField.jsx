import { Password } from '@components/Fields';
import { Fieldset } from '@components/Formik';
import { Field } from 'formik';

const ConfirmPasswordField = () => {
  return (
    <Fieldset name="confirmPassword" label="Confirmă parola nouă">
      <Field
        as={Password}
        name="confirmPassword"
        id="confirmPassword"
        className="backoffice-input text-black"
      />
    </Fieldset>
  );
};

export default ConfirmPasswordField;
