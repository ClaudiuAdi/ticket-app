import { closeTicket } from '@api/tickets';
import { Button } from '@components';
import { Fieldset, Form, Person, Submit } from '@components/Formik';
import { dateLocaleRo } from '@functions';
import { useQuery } from '@hooks';
import { toaster } from '@lib';
import { validationSchema } from '@models/assign-ticket';
import { Field, Formik } from 'formik';
import { Col, Container, Modal, Row } from 'react-bootstrap';

const CloseTicket = ({ id, isOpen, hide }) => {
  const { data, refetch } = useQuery(`/admin/tickets/${id}`);

  const handleClose = async ({ assignedPerson }) => {
    try {
      await closeTicket(data._id, assignedPerson);
      toaster.success('Tichetul a fost închis cu success');
      refetch();
      hide();
    } catch {
      toaster.error('Tichetul nu a putut fi închis');
    }
  };

  return (
    <Modal centered show={isOpen} onHide={hide} backdrop="static" size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Ești sigur că dorești să închizi acest tichet?</Modal.Title>
      </Modal.Header>

      <Formik initialValues={data} validationSchema={validationSchema} onSubmit={handleClose}>
        <Form className="flex flex-col gap-4">
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={12} md={8}>
                  <section className="flex flex-col gap-4">
                    <div>
                      <p className="font-medium">Dorință</p>
                      {data.motivation}
                    </div>
                    {data.problemConfruntation && (
                      <div>
                        <p className="font-medium">
                          De ce crezi că ai/te confrunți cu această problemă/situație
                        </p>
                        {data.problemConfruntation}
                      </div>
                    )}
                    {data.lifeWithoutProblems && (
                      <div>
                        <p className="font-medium">Cum ar fi viața ta în lipsa acestei probleme</p>
                        {data.lifeWithoutProblems}
                      </div>
                    )}
                    <div>
                      <p className="font-medium">Mesaj</p>
                      {data.message}
                    </div>
                    <div>
                      <p className="font-medium">Răspuns</p>
                      {data.response}
                    </div>
                  </section>
                </Col>
                <Col xs={6} md={4}>
                  <section className="flex flex-col gap-4 py-7 pt-5 px-2 rounded bg-gray-200">
                    <h2 className="font-medium text-xl">Detalii</h2>
                    <div>
                      <span className="font-medium">Nume: </span>
                      {data.name}
                    </div>
                    <div>
                      <span className="font-medium">E-mail: </span>
                      {data.email}
                    </div>
                    <div className="space-y-6">
                      <Fieldset
                        name="assignedPerson"
                        label={'Persoană desemnată'}
                        className="font-medium"
                      >
                        <Field
                          as={Person}
                          name="assignedPerson"
                          id="assignedPerson"
                          person={data?.assignedPerson}
                        />
                      </Fieldset>
                    </div>
                    <div>
                      <span className="font-medium">Data primirii: </span>
                      {dateLocaleRo(data.dateReceived)}
                    </div>
                  </section>
                </Col>
              </Row>
            </Container>
          </Modal.Body>

          <Modal.Footer>
            <div className="w-full flex justify-between">
              <Button
                className="text-indigo-900 border-indigo-900 border-solid border-1 hover:text-white hover:bg-indigo-900 transition ease-in-out duration-150 p-1.5 rounded px-3 text-center"
                onClick={hide}
              >
                <i className="fas fa-arrow-left"></i>
                <span className="ml-2">Inapoi </span>
              </Button>
              <Submit className="text-red-700 border-red-700 border-solid border-1 hover:text-white hover:bg-red-700 transition ease-in-out duration-150 p-1.5 rounded px-3 text-center">
                <i className="fa-solid fa-check" />
                <span className="ml-2">Confirma</span>
              </Submit>
            </div>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
};

export default CloseTicket;
