import { checkAuth, withAuth } from '@auth';
import { Layout } from '@components';
import { OrdersTable } from '@components/OrdersTable';
import { useState } from 'react';

const Page = () => {
  const [options, setOptions] = useState({});

  return (
    <Layout title="Comenzi » Listă">
      <OrdersTable options={options} setOptions={setOptions} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
