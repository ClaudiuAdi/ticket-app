import { router } from '@lib';
import { initialValues, validationSchema } from '@models/ticket-step-two';
import { sitename } from '@site.config';
import { Field, Formik } from 'formik';
import Cookies from 'js-cookie';
import { Checkbox, Email, Input, Phone } from '../Fields';
import { Fieldset, Form, Submit } from '../Formik';

const StepTwoForm = () => {
  // Get cookie values from step one
  const cookieValues = JSON.parse(Cookies.get(sitename)) || {};

  const handleSubmit = (values) => {
    Cookies.set(sitename, JSON.stringify({ invoiceData: values, ticket: cookieValues }));
    router.push('/plata');
  };

  return (
    <Formik
      initialValues={{ ...initialValues, ...cookieValues }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <h1 className="text-xl font-semibold text-primary">Date facturare</h1>
        <p className="text-sm text-white">
          Completează datele care vor apărea pe factura emisă în urma plății online
        </p>
        <div className="flex flex-col gap-4 py-2 sm:flex-row max-w-4xl">
          <div className="w-full pl-1 text-white cursor-pointer md:text-lg pb-1">
            <Fieldset
              className="required"
              help="Informație obligatorie"
              label="Nume"
              name="lastName"
            >
              <Field as={Input} id="lastName" name="lastName" />
            </Fieldset>
          </div>
          <div className="w-full  pl-1 text-white cursor-pointer md:text-lg pb-1 ">
            <Fieldset
              className="required"
              help="Informație obligatorie"
              label="Prenume"
              name="firstName"
            >
              <Field as={Input} id="firstName" name="firstName" />
            </Fieldset>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-2 sm:flex-row max-w-4xl">
          <div className="w-full pl-1 text-white cursor-pointer md:text-lg pb-1">
            <Fieldset
              className="required"
              help="Informație obligatorie"
              label="Adresă de email"
              name="email"
            >
              <Field as={Email} id="email" name="email" />
            </Fieldset>
          </div>
          <div className="w-full pl-1 text-white cursor-pointer md:text-lg pb-1">
            <Fieldset className="required" help="Informație opțională" label="Telefon" name="phone">
              <Field as={Phone} id="phone" name="phone" type="tel" />
            </Fieldset>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-2 sm:flex-row max-w-4xl">
          <div className="w-full pl-1 text-white cursor-pointer md:text-lg pb-1">
            <Fieldset name="address" label="Adresă de facturare" help="Informație opțională">
              <Field as={Input} id="address" name="address" />
            </Fieldset>
          </div>
        </div>
        <Fieldset name="gdpr" fieldsetClassname="ml-1">
          <div className="flex">
            <Field as={Checkbox} className="w-4" id="gdpr" name="gdpr" />
            <label htmlFor="gdpr" className="text-white mt-1.5">
              <span>Am citit și sunt de acord cu </span>
              <a
                className="text-primary hover:text-blue-600 hover:underline"
                href="/gdpr"
                target="_blank"
              >
                <span>Prelucrare a Datelor cu Caracter Personal.</span>
              </a>
            </label>
          </div>
        </Fieldset>
        <Submit className="button bg-primary hover:bg-yellow-600 transition text-center text-black text-lg mt-5 font-bold rounded-lg py-1.5 md:w-1/4 w-full uppercase tracking-widest">
          Spre Plată
        </Submit>
      </Form>
    </Formik>
  );
};

export default StepTwoForm;
