import { EnergyInfo, Header } from '../components';
import Footer from '../components/Footer';

const Page = () => (
  <main className="relative min-h-screen bg-indigo-900/70 flex flex-col items-center justify-between font-universe">
    <Header />
    <EnergyInfo />
    <Footer />
  </main>
);

export default Page;
