import { router } from '@lib';
import { initialValues, validationSchema } from '@models/ticket-step-one';
import { sitename } from '@site.config';
import { Field, Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { Email, Input, Textarea } from '../Fields';
import { Fieldset, Submit } from '../Formik';

const StepOneForm = () => {
  const handleSubmit = async (values) => {
    Cookies.set(sitename, JSON.stringify(values));
    router.push('/date-facturare');
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-8 lg:grid-rows-2 lg:col-start-1 lg:row-start-1 ">
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-4 lg:items-end">
              <Fieldset
                name="name"
                label="Numele tău sau un pseudonim"
                className="pl-1 text-white cursor-pointer md:text-lg pb-1 required"
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
              name="motivation"
              label="1. Ce problemă specifică sau provocare întâmpinați în prezent?"
              className="pl-1 text-white cursor-pointer md:text-lg pb-1 required"
            >
              <Field id="motivation" name="motivation" as={Input} />
            </Fieldset>
          </div>
          <div className="grid lg:items-end lg:col-start-1 lg:row-start-2">
            <Fieldset
              name="problemConfruntation"
              label="2. De cât timp întâmpinați această problemă?"
              className="pl-1 text-white cursor-pointer md:text-lg pb-1"
            >
              <Field id="problemConfruntation" name="problemConfruntation" as={Input} />
            </Fieldset>
          </div>

          <div className=" self-start lg:col-start-2 lg:row-start-1">
            <Fieldset
              name="lifeWithoutProblems"
              label="3. Ați căutat anterior ajutor pentru această problemă? Dacă da, ce tip de ajutor ați primit?"
              className="pl-1 text-white cursor-pointer md:text-lg pb-1"
            >
              <Field id="lifeWithoutProblems" name="lifeWithoutProblems" as={Input} />
            </Fieldset>
          </div>
          <div className="grid lg:items-end lg:col-start-2 lg:row-start-2 ">
            <Fieldset
              name="message"
              label="4. Vă rugăm să furnizați orice alte informații sau detalii despre situația dvs. care credeți că ar fi utile pentru noi:"
              className="pl-1 text-white cursor-pointer md:text-lg pb-1 required "
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
          <Submit className="w-full button full primary sm:w-1/3 font-universe">Trimite</Submit>
        </div>
      </Form>
    </Formik>
  );
};

export default StepOneForm;
