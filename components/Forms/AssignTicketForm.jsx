import { assignEmployee } from '@api/tickets';
import { Fieldset, Form, Person, Submit } from '@components/Formik';
import { toaster } from '@lib';
import { validationSchema } from '@models/assign-ticket';
import { Field, Formik } from 'formik';

const AssignTicketForm = ({ id, initialValues, hide = () => {}, refetch = () => {} }) => {
  const handleSubmit = async ({ assignedPerson }) => {
    try {
      await assignEmployee(id, assignedPerson);
      toaster.success('Tichetul a fost alocat cu success');
      refetch();
      hide();
    } catch (e) {
      toaster.error('Tichetul nu a putut fi alocat');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-4">
        <div className="space-y-6">
          <Fieldset name="assignedPerson" label="Persoană">
            <Field
              as={Person}
              name="assignedPerson"
              id="assignedPerson"
              person={initialValues?.assignedPerson}
            />
          </Fieldset>
        </div>
        <Submit className="button full bg-primary border-none text-white w-full sm:w-fit">
          Salvează schimbările
        </Submit>
      </Form>
    </Formik>
  );
};

export default AssignTicketForm;
