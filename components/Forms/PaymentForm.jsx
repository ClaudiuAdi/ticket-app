import { axios, router, toaster } from '@lib';
import { initialValues, validationSchema } from '@models/payment';
import { sitename } from '@site.config';
import { Field, Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { collectBrowserInfo, encrypt, isPaymentError } from 'netopia-card';
import { useMemo, useState } from 'react';
import { Input } from '../Fields';
import { Fieldset, Submit } from '../Formik';

const PaymentForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    const publicKey = process.env.PUBLIC_KEY;
    if (!publicKey) {
      toaster.error('A apărut o eroare la procesarea plății, încercați din nou');
      return;
    }
    try {
      setIsLoading(true);
      const cookieValues = JSON.parse(Cookies.get(sitename)) || {};
      const data = {
        ...collectBrowserInfo(navigator, window),
        ...cookieValues,
        ...values,
      };
      const { envKey, envData } = encrypt(publicKey, JSON.stringify(data));
      const response = await axios.post('/orders', { envKey, envData });
      const { error, orderId } = response.data;
      if (isPaymentError(error?.code)) {
        toaster.error(error?.message);
      } else {
        router.push(`/proceseaza-comanda?orderId=${orderId}`);
      }
    } catch (error) {
      toaster.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);
  const years = useMemo(
    () => Array.from({ length: 11 }, (_, i) => i + new Date().getFullYear()),
    []
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="space-y-4">
        <Fieldset name="account" label="Numărul cardului">
          <Field
            as={Input}
            autoComplete="off"
            autoFocus
            className="backoffice-input text-black"
            id="account"
            name="account"
            placeholder="1234 5678 1234 5678"
          />
        </Fieldset>
        <div className="grid grid-cols-2 gap-4">
          <Fieldset name="expMonth" label="Data expirării">
            <div className="grid grid-cols-2 gap-2">
              <Field
                id="expMonth"
                name="expMonth"
                as="select"
                className="backoffice-input text-black"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </Field>
              <Field
                id="expYear"
                name="expYear"
                as="select"
                className="backoffice-input text-black"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Field>
            </div>
          </Fieldset>
          <Fieldset name="secretCode" label="Cod securitate">
            <Field
              as={Input}
              autoComplete="off"
              className="backoffice-input text-black"
              id="secretCode"
              name="secretCode"
              placeholder="CVV/CVV2"
            />
          </Fieldset>
        </div>
        <div className="w-full flex justify-start items-start">
          <p className="text-lg font-semibold">Total de plată: 17 RON</p>
        </div>
        <Submit className="button full mt-2 w-full add" isLoading={isLoading}>
          Plătește
        </Submit>
      </Form>
    </Formik>
  );
};

export default PaymentForm;
