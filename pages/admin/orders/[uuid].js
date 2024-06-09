import { OrderCard } from '@components/OrderCard';
import { withRouter, Layout } from '@components';
import { checkAuth, withAuth } from '@auth';

const Page = ({ uuid }) => {
  return (
    <Layout title="Comenzi » Vizualizare">
      <OrderCard uuid={uuid} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(withRouter(Page));
