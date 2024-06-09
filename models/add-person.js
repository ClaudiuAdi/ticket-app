import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Acest câmp este obligatoriu'),
  email: Yup.string()
    .email('Trebuie introdus un e-mail valid')
    .required('Acest câmp este obligatoriu'),
  role: Yup.string().required('Acest câmp este obligatoriu'),
  password: Yup.string()
    .min(8, 'Parola nouă trebuie să aibă cel puțin 8 caractere.')
    .required('Acest câmp este obligatoriu'),
  confirmPassword: Yup.string()
    .required('Acest câmp este obligatoriu')
    .oneOf([Yup.ref('password'), null], 'Parolele trebuie să fie identice'),
  notifications: Yup.boolean(),
});

export const updateValidationSchema = Yup.object().shape({
  name: Yup.string().required('Acest câmp este obligatoriu'),
  email: Yup.string()
    .email('Trebuie introdus un e-mail valid')
    .required('Acest câmp este obligatoriu'),
  role: Yup.string().required('Acest câmp este obligatoriu'),
  password: Yup.string()
    .min(8, 'Parola nouă trebuie să aibă cel puțin 8 caractere.')
    .oneOf([Yup.ref('confirmPassword'), null], 'Parolele trebuie să fie identice'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Parolele trebuie să fie identice'
  ),
  notifications: Yup.boolean(),
});

export const initialValues = {
  name: '',
  email: '',
  role: 'admin',
  password: '',
  confirmPassword: '',
  notifications: false,
};
