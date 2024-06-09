import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Email, Password, Recaptcha } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/login';
import { login } from '../../api';

const LoginForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await login(ref, values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <Fieldset name="email" label="Adresa de email">
          <Field
            id="email"
            name="email"
            as={Email}
            autoFocus
            className="backoffice-input text-black"
          />
        </Fieldset>

        <Fieldset name="password" label="Parolă contului tău">
          <Field
            id="password"
            name="password"
            as={Password}
            className="backoffice-input text-black"
          />
        </Fieldset>
        <Submit className="button full mt-2 w-full add">LOGARE</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
