import { checkAuth, withAuth } from '@auth';
import { Layout } from '@components';
import { MessagesTable } from '@components/MessagesTable';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const [options, setOptions] = useState({});
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initializing filter options based on query parameters.
    const queryParams = Object.fromEntries(searchParams);

    setOptions(queryParams);
  }, [searchParams]);

  return (
    <Layout title="Tichete">
      <MessagesTable options={options} setOptions={setOptions} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
