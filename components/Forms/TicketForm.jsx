import { initialValues, validationSchema } from '@models/ticket-step-one';
import { Field, Form, Formik } from 'formik';
import { Email, Input, Textarea } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { createTicket } from '@api/tickets';
import { useState } from 'react';

const TicketForm = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (values) => {
    await createTicket(values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="flex flex-col gap-8 text-gray-700">
          <div className="flex flex-col gap-8 lg:grid-rows-2 lg:col-start-1 lg:row-start-1 ">
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-4 lg:items-end">
              <Fieldset
                name="name"
                label="Numele tău sau un pseudonim"
                className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1 required"
              >
                <Field id="name" name="name" as={Input} />
              </Fieldset>
              <Fieldset
                name="email"
                label="Adresa de e-mail"
                className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1 required"
              >
                <Field id="email" name="email" as={Email} />
              </Fieldset>
            </div>
            <Fieldset
              name="problem"
              label="1. Ce problemă specifică sau provocare întâmpinați în prezent?"
              className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1 required"
            >
              <Field id="problem" name="problem" as={Input} />
            </Fieldset>
          </div>
          <div className="grid lg:items-end lg:col-start-1 lg:row-start-2">
            <Fieldset
              name="time"
              label="2. De cât timp întâmpinați această problemă?"
              className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1"
            >
              <Field id="time" name="time" as={Input} />
            </Fieldset>
          </div>

          <div className=" self-start lg:col-start-2 lg:row-start-1">
            <Fieldset
              name="previousHelp"
              label="3. Ați căutat anterior ajutor pentru această problemă? Dacă da, ce tip de ajutor ați primit?"
              className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1"
            >
              <Field id="previousHelp" name="previousHelp" as={Input} />
            </Fieldset>
          </div>
          <div className="grid lg:items-end lg:col-start-2 lg:row-start-2 ">
            <Fieldset
              name="message"
              label="4. Vă rugăm să furnizați orice alte informații sau detalii despre situația dvs. care credeți că ar fi utile pentru noi:"
              className="pl-1 text-gray-700 cursor-pointer md:text-lg pb-1 required "
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
        </div>
        <div className="flex max-w-2xl flex-col gap-2 mt-6">
          <Submit className="w-full button full primary sm:w-1/3 font-universe bg-primary">
            Trimite
          </Submit>
        </div>
      </Form>
    </Formik>
  );
};

export default TicketForm;
