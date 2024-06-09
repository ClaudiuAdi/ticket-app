import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Acest câmp este obligatoriu'),
  email: Yup.string().email().required('Acest câmp este obligatoriu'),
  problem: Yup.string().required('Acest câmp este obligatoriu'),
  time: Yup.string(),
  previousHelp: Yup.string(),
  message: Yup.string().required('Acest câmp este obligatoriu'),
});

export const initialValues = {
  name: '',
  email: '',
  problem: '',
  time: '',
  previousHelp: '',
  message: '',
};
