/** @type {import('next').NextConfig} */
const headers = require('./config/headers');

module.exports = {
    reactStrictMode: true,
      
      /**
       * add the headers you would like your next server to use
       * documentation: https://nextjs.org/docs/api-reference/next.config.js/headers
       *                https://nextjs.org/docs/advanced-features/security-headers
       */
     headers
    };
    