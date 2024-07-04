import { createTicket } from '@api/tickets';
import { initialValues, validationSchema } from '@models/ticket-step-one';
import { Field, Form, Formik } from 'formik';
import { Email, Input, Textarea } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { useState } from 'react';
import { toaster } from '@lib';

const TicketForm = () => {
  const [state, setState] = useState({
    error: null,
    submitting: false,
    succeeded: false,
  });

  const handleSubmit = async (data, formik) => {
    setState({ ...state, submitting: true });
    await createTicket(data);
    setState({ ...state, submitting: false });
    formik.resetForm();
    toaster.success('Mesajul a fost inregistrat cu succes');
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="sm:grid lg:grid-cols-2 flex flex-col gap-8 py-5">
          <div className="flex flex-col gap-8 lg:grid-rows-2 lg:col-start-1 lg:row-start-1 ">
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-4 lg:items-end">
              <Fieldset
                name="name"
                label="Numele tău sau un pseudonim"
                className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1 required font-semibold"
              >
                <Field id="name" name="name" as={Input} />
              </Fieldset>
              <Fieldset
                name="email"
                label="Adresa de e-mail"
                className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1 required font-semibold"
              >
                <Field id="email" name="email" as={Email} />
              </Fieldset>
            </div>
            <Fieldset
              name="problem"
              label="1. Ce problemă specifică sau provocare întâmpinați în prezent? Vrem să știm cu ce dificultăți vă confruntați acum."
              className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1 required font-semibold"
            >
              <Field id="problem" name="problem" as={Input} />
            </Fieldset>
          </div>
          <div className="grid lg:items-end lg:col-start-1 lg:row-start-2">
            <Fieldset
              name="time"
              label="2. De cât timp întâmpinați această problemă?"
              className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1 font-semibold"
            >
              <Field id="time" name="time" as={Input} />
            </Fieldset>
          </div>
          <div className=" self-start lg:col-start-2 lg:row-start-1 ">
            <Fieldset
              name="message"
              label="3. Vă rugăm să furnizați orice alte informații despre situația dvs."
              className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1 required font-semibold"
            >
              <Field
                id="message"
                name="message"
                placeholder="Scrie aici..."
                rows={7}
                as={Textarea}
              />
            </Fieldset>
          </div>
          <div className="grid lg:items-end lg:col-start-2 lg:row-start-2">
            <Fieldset
              name="previousHelp"
              label="4. Ați căutat ajutor pentru această problemă? Dacă da, ce tip?"
              className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1 font-semibold"
            >
              <Field id="previousHelp" name="previousHelp" as={Input} />
            </Fieldset>
          </div>
          <div className="flex max-w-2xl flex-col gap-2 mt-6">
            <Submit
              isLoading={state.submitting}
              className="w-full button full primary sm:w-1/3 font-universe bg-primary hover:bg-white hover:text-primary"
            >
              Trimite
            </Submit>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default TicketForm;
