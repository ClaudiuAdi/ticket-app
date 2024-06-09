import Cookies from 'js-cookie';
import { sitename } from '@site.config';
import ApprovedPage from './ApprovedPage';
import { BackToMainPage, PendingPage, RejectedPage } from '.';
import { useEffect } from 'react';

const ProcessOrderSuccess = ({ status }) => {
  useEffect(() => {
    // Remove cookie on success
    Cookies.remove(sitename);
  }, []);

  return (
    <article className="max my-4 flex w-full py-8 sm:px-12 font-universe">
      <div className="flex w-full flex-col items-center rounded bg-black/20 p-8 drop-shadow-lg text-white">
        {status === 'approved' && <ApprovedPage />}
        {status === 'pending' && <PendingPage />}
        {status === 'rejected' && <RejectedPage reason={'motiv'} />}

        <BackToMainPage />
      </div>
    </article>
  );
};

export default ProcessOrderSuccess;
