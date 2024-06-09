import { Features, Header } from '../components';
import Footer from '../components/Footer';

const Page = () => (
  <main className="relative min-h-screen bg-indigo-900/70 flex flex-col items-center justify-between font-universe">
    <Header />
    <div className="px-4 sm:px-0">
      <Features />
    </div>
    <Footer />
  </main>
);

export default Page;
