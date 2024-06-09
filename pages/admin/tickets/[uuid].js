import { checkAuth, withAuth } from '@auth';
import { Layout, withRouter } from '@components';
import { TicketCard } from '@components/TicketCard';

const Page = ({ uuid }) => {
  return (
    <Layout title="Tichete » Vizualizare">
      <TicketCard uuid={uuid} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(withRouter(Page));
