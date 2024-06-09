import { Form } from '@components/Formik';
import { Formik } from 'formik';

const FiltersForm = ({ children, initialValues, setOptions }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={setOptions}>
      <Form autoSubmit>{children}</Form>
    </Formik>
  );
};

export default FiltersForm;
