import { checkAuth, withAuth } from '@auth';
import { Layout } from '@components';
import { UserProfile } from '@components/UserProfile';

const Page = () => {
  return (
    <Layout title="Profilul meu">
      <UserProfile />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
