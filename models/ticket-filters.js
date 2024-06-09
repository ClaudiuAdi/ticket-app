import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  tikcetEmail: Yup.string(),
  assignedPersonId: Yup.string(),
  status: Yup.string(),
});

export const initialValues = {
  tikcetEmail: '',
  assignedPersonId: '',
  status: '',
};
