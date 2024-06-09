import { useEffect } from 'react';
import { useRouter } from 'next/router';

const MatomoAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.startsWith('/admin')) {
      return;
    }
    var _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' });
    (function () {
      var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
      g.async = true;
      g.src = process.env.MATOMO_ANALYTICS_URL;
      s.parentNode.insertBefore(g, s);
    })();
  }, []);

  return null;
};

export default MatomoAnalytics;
