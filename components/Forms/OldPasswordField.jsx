import { Password } from '@components/Fields';
import { Fieldset } from '@components/Formik';
import { Field } from 'formik';

const OldPasswordField = () => {
  return (
    <Fieldset name="oldPassword" label="Parolă veche">
      <Field
        as={Password}
        name="oldPassword"
        id="oldPassword"
        autoFocus
        className="backoffice-input text-black"
      />
    </Fieldset>
  );
};

export default OldPasswordField;
