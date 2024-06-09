import * as Yup from 'yup';
// paswword should be at least 8 characters long
export const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Parola veche este obligatorie'),
  newPassword: Yup.string()
    .required('Parola nouă este obligatorie. Cel puțin 8 caractere.')
    .min(8, 'Parola nouă trebuie să aibă cel puțin 8 caractere.'),
  confirmPassword: Yup.string()
    .required('Confirmarea parolei este obligatorie.')
    .oneOf([Yup.ref('newPassword'), null], 'Parolele nu se potrivesc.'),
});

export const initialValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};
