import StepOne from '@components/Steps/StepOne';
import { Footer, Header } from '../components';
import { TicketForm } from '../components/Forms';

const Page = () => {
  return (
    <main className="overflow-hidden min-h-screen font-universe bg-white flex flex-col items-center justify-center">
      <div className="sm:absolute sm:top-0 z-20 w-full">{/* <Header /> */}</div>
      <StepOne>
        <TicketForm />
      </StepOne>
      <Footer />
    </main>
  );
};

export default Page;
