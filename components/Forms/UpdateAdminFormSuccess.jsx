import { updateAdmin } from '@api/persons';
import { Button, Tooltip } from '@components';
import { Checkbox, Email, Input, Password, Select } from '@components/Fields';
import { Fieldset, Submit } from '@components/Formik';
import { toaster } from '@lib';
import { updateValidationSchema } from '@models/add-person';
import { Field, Form, Formik } from 'formik';

const UpdateAdminFormSuccess = ({ data, id, hide, refetch }) => {
  const options = ['admin'];

  const handleSubmit = async (values) => {
    try {
      await updateAdmin(id, values);
      toaster.success('Utilizatorul a fost actualizat');
      refetch();
      if (typeof hide === 'function') {
        return hide();
      }
    } catch (e) {
      toaster.error('Utilizatorul nu a putut fi actualizat');
    }
  };

  const translateRoleOptionToRomanian = (roleOption) => {
    switch (roleOption) {
      case 'admin':
        return 'Administrator';
    }
  };

  return (
    <Formik validationSchema={updateValidationSchema} initialValues={data} onSubmit={handleSubmit}>
      <Form>
        <div className="flex flex-col gap-4 h-fit">
          <Fieldset name="name" label="Nume">
            <Field as={Input} name="name" id="name" className="backoffice-input text-black " />
          </Fieldset>
          <Fieldset name="email" label="E-mail">
            <Field as={Email} name="email" id="email" className="backoffice-input text-black" />
          </Fieldset>
          <Fieldset name="role" label="Rolul utilizatorului">
            <Field
              id="role"
              name="role"
              as={Select}
              className="text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            >
              <option value="" disabled>
                Selecteaza rolul
              </option>
              {options.map((option) => {
                return (
                  <option value={option} key={option}>
                    {translateRoleOptionToRomanian(option)}
                  </option>
                );
              })}
            </Field>
          </Fieldset>
          <Fieldset name="password" label="Parolă">
            <Field
              as={Password}
              name="password"
              id="password"
              className="backoffice-input text-black"
            />
          </Fieldset>
          <Fieldset name="confirmPassword" label="Confirmă parola">
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
                defaultChecked={data?.notifications}
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
            <Button
              className="button flex rounded-full gap-6 items-center justify-center full bg-white border border-solid border-indigo-600 text-indigo-600"
              onClick={hide}
            >
              ANULEAZĂ
            </Button>
            <Submit className="button flex rounded-full gap-6 items-center justify-center full bg-indigo-500 border-none text-white w-full">
              ACTUALIZEAZĂ
            </Submit>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default UpdateAdminFormSuccess;
