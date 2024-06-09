import { assignEmployee } from '@api/tickets';
import { Textarea } from '@components/Fields';
import { Fieldset, Form, Submit } from '@components/Formik';
import { AnswerTicket } from '@components/Modals';
import { useProfile } from '@hooks';
import { classnames, toaster } from '@lib';
import { validationSchema } from '@models/answer-ticket';
import { Field, Formik } from 'formik';
import { useState } from 'react';

const AnswerTicketForm = ({ id, data, refetch, status }) => {
  const [modal, setModal] = useState('');
  const hideModal = () => setModal('');
  const { me } = useProfile();

  const handleSubmit = async () => {
    try {
      await assignEmployee(id, { _id: me.me, name: me.name });
      refetch();
    } catch (e) {
      toaster.error('Tichetul nu a putut fi alocat');
      // eslint-disable-next-line no-console
      console.log(e);
    }
    setModal('answer');
  };

  return (
    <Formik initialValues={data} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4 mt-4">
        <div className="space-y-6">
          <Fieldset name="response" className="text-lg font-semibold">
            <Field
              as={Textarea}
              name="response"
              id="response"
              placeholder="Scrie un răspuns"
              className={classnames(
                'py-2 px-3 border border-neutral-300 bg-white/5 shadow-sm rounded-lg outline-none text-black focus:ring-1 focus:border-transparent focus:ring-gray-400',
                status === 'closed' && 'bg-gray-200 cursor-not-allowed'
              )}
              disabled={status === 'closed'}
            />
          </Fieldset>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-end">
          {status !== 'closed' && (
            <Submit className="w-full sm:w-fit button flex pl-5 pr-5 sm:pr-2 rounded-full gap-6 items-center full bg-indigo-500 border-none text-white">
              <span className="mx-auto uppercase">Trimite</span>
              <div className="hidden sm:flex justify-center items-center gap-2 w-3 h-3 p-3 bg-indigo-400 rounded-full">
                <i className="text-xs fa-solid fa-arrow-right"></i>
              </div>
            </Submit>
          )}
        </div>
        {modal === 'answer' && (
          <AnswerTicket id={id} isOpen={modal === 'answer'} hide={hideModal} />
        )}
      </Form>
    </Formik>
  );
};

export default AnswerTicketForm;
