import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  response: Yup.string().required('Câmp obligatoriu!'),
});

export const initialValues = {
  response: '',
};
