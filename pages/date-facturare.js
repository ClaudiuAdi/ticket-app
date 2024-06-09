import { Header, Footer, NoSsr } from '../components';
import { StepTwoForm } from '../components/Forms';
import StepTwo from '../components/Steps/StepTwo';

const Page = () => {
  return (
    <main className="relative min-h-screen bg-indigo-900/70 flex flex-col items-center justify-center font-universe">
      <Header />
      <NoSsr>
        <StepTwo>
          <StepTwoForm />
        </StepTwo>
      </NoSsr>
      <Footer />
    </main>
  );
};

export default Page;
