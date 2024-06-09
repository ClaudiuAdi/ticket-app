import { ErrorFallback, Header, Loading, Title, withRouter } from '@components';
import Footer from '@components/Footer';
import { ProcessOrderSuccess } from '@components/Shop';
import { useQuery } from '@hooks';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const { data, status } = useQuery(`orders/${orderId}`);

  return (
    <main className="bg-indigo-900/50 min-h-screen flex flex-col justify-between font-universe">
      <Header />
      <div className="mt-10 font-title">
        <Title>Procesare comandă</Title>
        {status === 'error' && (
          <main className="max my-4 flex h-64 w-full py-8 sm:px-12">
            <div className="w-full">
              <ErrorFallback />
            </div>
          </main>
        )}
        {status === 'loading' && (
          <main className="max my-4 flex h-64 w-full py-8 sm:px-12">
            <div className="w-full">
              <Loading />
            </div>
          </main>
        )}
        {status === 'success' && <ProcessOrderSuccess {...data} />}
      </div>
      <Footer className="bottom-0" />
    </main>
  );
};

export default withRouter(Page);
