import { answerTicket } from '@api/tickets';
import { Button } from '@components';
import { useQuery } from '@hooks';
import { toaster } from '@lib';
import { useFormikContext } from 'formik';
import { Modal } from 'react-bootstrap';

const AnswerTicket = ({ id, isOpen, hide }) => {
  const { data, refetch } = useQuery(`/admin/tickets/${id}`);

  const { values } = useFormikContext();

  const sendAnswerHandler = async () => {
    try {
      await answerTicket(id, { response: values.response });
      toaster.success('Răspunsul a fost trimis cu success');
      refetch();
      hide();
    } catch (e) {
      toaster.error('Răspunsul nu a putut fi trimis');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <Modal centered show={isOpen} onHide={hide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Ești sigur că dorești sa trimiți acest răspuns?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <article className="flex flex-col">
          <header className="bg-[#221C4C] py-7 flex justify-center items-center gap-4">
            <img src={`/favicon.ico`} alt="star" className="w-3.5 pb-1" />
            <h2 className="text-white font-medium text-lg">The server of the Universe</h2>
            <img src={`/favicon.ico`} alt="star" className="w-3.5 pb-1" />
          </header>
          <main className="flex flex-col gap-14 text-gray-700 py-14 bg-[url('/images/astro-email.png')] bg-no-repeat">
            <h1 className="text-center text-2xl font-bold">Dragă {data.name},</h1>
            <div className="flex flex-col gap-2">
              <p className="pl-10 text-lg">
                <span className="ml-4">Apreciez</span> intentia ta de a-ti imbunatati viata si admir
                curajul tau de a cere suport in indeplinirea obiectivelor si scopurilor personale.
              </p>
              <p className="pl-10 text-lg">
                <span className="ml-4">Datorită</span> mesajului tau, in acest moment, poti
                considera ca a si inceput procesul de solutionare a problemei tale. Semnalul tau a
                fost inregistrat si oportunitati minunate vor aparea in calea ta, care te vor ghida
                si vor determina materializarea dorintei tale.
              </p>
              <p className="pl-10 text-lg">
                <span className="ml-4">Știu</span> ca abia astepti sa te bucuri de rezultat, insa te
                sfatuiesc sa scoti din calcul orice limita de timp. Ori de cate ori iti vine in
                minte „Cand?” raspunde automat „La momentul potrivit mie, in orice privinta!”.
                Priveste cu detasare procesul si ai incredere in indeplinirea scopului tau.
              </p>
              <p className="pl-10 text-lg">
                <span className="ml-4">Mantra</span>, pe care ti-am pregatit-o, reprezinta chemarea
                acelui potential energetic viitor pe care tu il creezi si il atragi catre tine, ori
                de cate ori vei rosti aceste cuvinte. Cu cat vei repeta mai mult, cu atat vei
                micsora distanta intre tine si scopul tau. Imagineaza-ti ce vei simti in acel
                moment, traieste intens acele emotii de bucurie si recunostinta si multumeste-ti
                pentru reusita ta ca si cum s-ar fi intamplat deja si rezultatele nu vor intarzia sa
                apara.
              </p>
              <p className="pl-10 text-lg text-indigo-600 font-semibold">{values.response}</p>
            </div>
            <p className="pl-10 text-lg">
              Asa este si asa sa fie!
              <br />
              Cu iubire, pace si liniste, abundenta si succes,
              <br />
              The Server of the Universe
            </p>
          </main>
          <footer className="bg-[#221C4C] text-white text-center text-sm py-10">
            Copyright &copy; {new Date().getFullYear()}
            <span className="underline pl-1">The server of the universe</span>. All rights reserved
          </footer>
        </article>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-full flex flex-col sm:flex-row sm:gap-0 gap-4 justify-between">
          <Button
            className="button flex py-2.5 rounded-full gap-6 items-center full bg-indigo-500 border-none text-white justify-center sm:justify-normal"
            onClick={hide}
          >
            ÎNAPOI
          </Button>

          <Button
            className="button flex sm:pl-5 sm:pr-2 rounded-full sm:gap-6 gap-3 items-center full
              bg-green-600 border-none text-white justify-center sm:justify-normal uppercase"
            onClick={sendAnswerHandler}
          >
            Trimite
            <div className="flex justify-center items-center gap-2 w-3 h-3 p-3 bg-green-500 rounded-full">
              <i className="text-xs fa-solid fa-check"></i>
            </div>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AnswerTicket;
