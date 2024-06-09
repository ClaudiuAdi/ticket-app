import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  address: Yup.string(),
  email: Yup.string()
    .email('Trebuie introdus un e-mail valid')
    .required('Acest câmp este obligatoriu'),
  firstName: Yup.string().required('Acest câmp este obligatoriu'),
  gdpr: Yup.boolean().oneOf([true], 'Trebuie să accepți prelucrarea datelor cu caracter personal'),
  lastName: Yup.string().required('Acest câmp este obligatoriu'),
  phone: Yup.string().required('Acest câmp este obligatoriu'),
});

export const initialValues = {
  address: '',
  email: '',
  firstName: '',
  gdpr: false,
  lastName: '',
  phone: '',
};
