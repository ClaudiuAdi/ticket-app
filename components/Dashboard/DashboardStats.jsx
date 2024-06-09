import { useQuery } from '@hooks';
import { DashboardStatsSuccess } from '.';
import DashboardStatsError from './DashboardStatsError';
import DashboardStatsLoading from './DashboardStatsLoading';

const DashboardStats = ({ url }) => {
  const { data, status } = useQuery(url);

  return (
    <>
      {status === 'loading' && <DashboardStatsLoading />}
      {status === 'error' && <DashboardStatsError />}
      {status === 'success' && <DashboardStatsSuccess {...data} />}
    </>
  );
};

export default DashboardStats;
