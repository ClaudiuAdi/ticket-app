require('dotenv').config();
const headers = require('./headers');

module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    APP_BASE_URL: process.env.APP_BASE_URL,
    MATOMO_ANALYTICS_URL: process.env.MATOMO_ANALYTICS_URL,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    SHOW_FORMIK_DEBUG: process.env.SHOW_FORMIK_DEBUG,
    SHOW_LOGS_EVERYWHERE: process.env.SHOW_LOGS_EVERYWHERE,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
  generateEtags: false,
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
};
