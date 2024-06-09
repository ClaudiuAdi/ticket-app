import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Acest câmp este obligatoriu'),
  email: Yup.string()
    .email('Trebuie introdus un e-mail valid')
    .required('Acest câmp este obligatoriu'),
  message: Yup.string().required('Acest câmp este obligatoriu'),
});

export const initialValues = {
  name: '',
  email: '',
  message: '',
};
