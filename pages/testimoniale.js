import { Header, Testiomonials } from '../components';
import Footer from '../components/Footer';

const Page = () => (
  <main className="relative min-h-screen bg-indigo-900/70 flex flex-col items-center justify-between font-universe">
    <Header />
    <div className="pt-24 sm:px-20">
      <Testiomonials />
    </div>
    <Footer />
  </main>
);

export default Page;
