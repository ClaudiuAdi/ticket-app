import { checkAuth, withAuth } from '@auth';
import { Layout } from '@components';
import { AdminDashboard } from '@components/AdminDashboard';

const Page = () => {
  return (
    <Layout title="Dashboard">
      <AdminDashboard />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
