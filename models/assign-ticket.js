import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  assignedPerson: Yup.object().required('Câmp obligatoriu!'),
});

export const initialValues = {
  assignedPerson: '',
};
