import { checkAuth, withAuth } from '@auth';
import { Button, Layout } from '@components';
import { AdminList } from '@components/AdminList';
import { AddAdmin } from '@components/Modals';
import { useQuery } from '@hooks';
import { useState } from 'react';

const Page = () => {
  const { data, status, refetch } = useQuery(`/admin/identities?role=admin`);

  const [modal, setModal] = useState('');

  const hideModal = () => {
    setModal('');
    refetch();
  };

  return (
    <Layout title="Echipă">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <Button onClick={() => setModal('add')} className="button full add">
            <i className="text-base fa-solid fa-plus block sm:hidden"></i>
            <span className="sm:block hidden">ADAUGĂ UTILIZATOR</span>
          </Button>
        </div>
        <AdminList {...{ data, status, refetch }} />
        {modal === 'add' && (
          <AddAdmin isOpen={modal === 'add'} hide={hideModal} refetch={refetch} />
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
