import { Header } from '@components';
import Footer from '@components/Footer';
import { ContactForm } from '@components/Forms';

const Page = () => {
  return (
    <main className="overflow-hidden min-h-screen font-universe bg-indigo-900/50 flex flex-col items-center justify-center">
      <Header />
      <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
        <div className="flex flex-col text-center gap-2">
          <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">
            Conectează-te cu Noi prin Energie și Intenție
          </p>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              La Server of the Universe, credem în puterea conexiunii spirituale și a intenției.
              Suntem aici să te ghidăm în călătoria ta spre realizarea dorințelor. Fiecare
              interacțiune cu noi este ca o Mantra, o poartă deschisă spre energiile universului
              care te înconjoară.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Noi credem că gândurile și intențiile tale pot schimba realitatea în moduri
              misterioase. Atunci când ne contactezi, emani energii care te duc către echilibru și
              armonie, iar noi suntem aici pentru a te susține în această călătorie. Suntem
              conștienți că suntem parte din dansul cosmic al Universului, iar împlinirea dorințelor
              tale este un pas în acest dans sacru.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Contactează-ne și împreună vom folosi această conexiune spirituală pentru a
              materializa dorințele tale. Începe această călătorie cu noi și descoperă puterea
              intenției tale.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
};

export default Page;
