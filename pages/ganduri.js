import ThoughtsInfo from '@components/ThoughtsInfo';
import { Header } from '../components';
import Footer from '../components/Footer';

const Page = () => (
  <main className="relative min-h-screen bg-indigo-900/70 flex flex-col items-center justify-between font-universe">
    <Header />
    <ThoughtsInfo />
    <Footer />
  </main>
);

export default Page;
