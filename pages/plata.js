import { Logo } from '@components';
import { PaymentForm } from '@components/Forms';

const Page = () => (
  <main className="login-cover min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <Logo />
    <div className="flex flex-col w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
      <h2 className="font-bold text-2xl mb-4">Completează datele cardului</h2>
      <PaymentForm />
    </div>
    <div className="flex">
      <img src="/images/netopia-logo.png" alt="Netopia Payments" className="w-80" />
    </div>
  </main>
);

export default Page;
