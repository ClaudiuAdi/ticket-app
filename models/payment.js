import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  account: Yup.string().required('Campul este obligatoriu'),
  secretCode: Yup.string().required('Campul este obligatoriu'),
  expMonth: Yup.string().required('Campul este obligatoriu'),
  expYear: Yup.string().required('Campul este obligatoriu'),
});

export const initialValues = {
  account: '',
  secretCode: '',
  expMonth: '1',
  expYear: new Date().getFullYear().toString(),
};
