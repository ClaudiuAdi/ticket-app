import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Trebuie introdus un e-mail valid')
    .required('Acest câmp este obligatoriu'),
});

export const initialValues = {
  email: '',
};
