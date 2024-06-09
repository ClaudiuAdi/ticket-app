import { Formik } from 'formik';
import { updatePassword } from '../../api/update-password';
import { Form, Submit } from '../Formik';
import { ChangePasswordForm } from '.';
import { useMutation } from '../../hooks';
import { initialValues, validationSchema } from '../../models/change-password';
import logout from '@api/logout';

const MyProfileChangePassword = () => {
  const mutation = useMutation(updatePassword, {
    successMessage: 'Succes! Parola a fost schimbată.',
    successCallback: logout,
  });

  const handleSubmit = (data) => {
    return mutation.mutateAsync(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <ChangePasswordForm />
        <Submit className="button w-full full add mt-4">SALVEAZĂ SCHIMBĂRI</Submit>
      </Form>
    </Formik>
  );
};

export default MyProfileChangePassword;
