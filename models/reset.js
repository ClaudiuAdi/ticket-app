import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Parola trebuie să aibă cel puțin 8 caractere.')
    .required('Acest câmp este obligatoriu'),
});

export const initialValues = {
  password: '',
};
