import { createAdmin } from '@api/persons';
import { Button, Tooltip } from '@components';
import { Checkbox, Email, Input, Password, SelectRole } from '@components/Fields';
import { Fieldset, Form, Submit } from '@components/Formik';
import { toaster } from '@lib';
import { initialValues, validationSchema } from '@models/add-person';
import { Field, Formik } from 'formik';

const AddAdminForm = ({ refetch, hide }) => {
  const handleSubmit = async (values, resetForm) => {
    try {
      await createAdmin(values);
      toaster.success('Utilizatorul a fost creat cu success');
      refetch();
      resetForm();
      hide();
    } catch (e) {
      toaster.error('Utilizatorul nu a putut fi creat');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
    >
      <Form>
        <div className="flex flex-col gap-4 h-fit">
          <Fieldset name="name" label="Nume">
            <Field as={Input} name="name" id="name" className="backoffice-input text-black " />
          </Fieldset>
          <Fieldset name="email" label="E-mail">
            <Field as={Email} name="email" id="email" className="backoffice-input text-black" />
          </Fieldset>
          <SelectRole />
          <Fieldset name="password" label="Parolă">
            <Field
              as={Password}
              name="password"
              id="password"
              className="backoffice-input text-black"
            />
          </Fieldset>
          <Fieldset name="confirmPassword" label="Confirmă parola nouă">
            <Field
              as={Password}
              name="confirmPassword"
              id="confirmPassword"
              className="backoffice-input text-black"
            />
          </Fieldset>
          <div className="flex gap-1">
            <Fieldset name="notifications">
              <Field
                as={Checkbox}
                name="notifications"
                id="notifications"
                className="backoffice-input text-black checkbox-indigo"
              >
                Notificări prin mail
              </Field>
            </Fieldset>
            <Tooltip
              icon="fas fa-question-circle text-indigo-600"
              className="w-8 text-accent flex justify-center items-center"
            >
              Bifând această căsuță, noul utilizator va primi notificări prin mail pentru fiecare
              tichet creat.
            </Tooltip>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button className="button full cancel" onClick={hide}>
              ANULEAZĂ
            </Button>
            <Submit className="button full add w-full sm:w-fit">ADAUGĂ</Submit>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AddAdminForm;
