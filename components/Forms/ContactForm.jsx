import { Email, Input, Recaptcha, Textarea } from '@components/Fields';
import { axios, toaster } from '@lib';
import { initialValues, validationSchema } from '@models/contact';
import { Field, Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { Fieldset, Submit } from '../Formik';

const ContactForm = () => {
  const ref = useRef(null);
  const [state, setState] = useState({
    error: null,
    submitting: false,
    succeeded: false,
  });

  const handleSubmit = async (event) => {
    setState((prevState) => ({ ...prevState, submitting: true }));

    const body = {
      email: event.email,
      message: event.message,
      name: event.name,
    };

    try {
      body['g-recaptcha-response'] = await ref.current.executeAsync();
    } catch (err) {
      toaster.error(err.message);
    }

    axios
      .post('visitor/contact', body)
      .then(() => {
        setState((prevState) => ({
          ...prevState,
          submitting: false,
          succeeded: true,
        }));
      })
      .catch((error) => {
        ref.current.reset();
        setState((prevState) => ({
          ...prevState,
          error: error.message,
          submitting: false,
        }));
      });
  };

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center gap-8 py-20 text-white">
        <i className="fa-solid fa-circle-check text-6xl text-green-500"></i>
        <p className="text-xl font-medium">
          Îți mulțumim că ne-ai scris! Te vom contacta în scurt timp!
        </p>
      </div>
    );
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Fieldset
              name="name"
              label="Numele tău sau un pseudonim"
              className="pl-1 text-white cursor-pointer md:text-lg pb-1 required"
              autoFocus
            >
              <Field id="name" name="name" as={Input} />
            </Fieldset>
            <Fieldset
              name="email"
              label="Adresa de e-mail"
              className="pl-1 text-white cursor-pointer md:text-lg pb-1 required"
            >
              <Field id="email" name="email" as={Email} />
            </Fieldset>
          </div>
          <Fieldset
            name="message"
            label="Mesaj"
            className="pl-1 text-white cursor-pointer md:text-lg pb-1 required"
          >
            <Field id="message" name="message" placeholder="Scrie aici..." as={Textarea} />
          </Fieldset>
          <div>
            <Submit className="w-full button full primary sm:w-1/3 font-universe">Trimite</Submit>
          </div>
          {state.error && (
            <div className="flex items-center justify-start gap-2 rounded border border-red-500 bg-red-100 p-4">
              <div>
                <i className="fa-solid fa-circle-exclamation text-xl text-red-500"></i>
              </div>
              <div className="text-red-500">
                <p className="text-center">{state.error}</p>
              </div>
            </div>
          )}
        </div>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default ContactForm;
