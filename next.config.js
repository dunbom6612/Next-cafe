/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'sa',
        mongodb_password: '1234',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'next-cafe-dev'
      }
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'sa',
      mongodb_password: '1234',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'next-cafe'
    }
  };
};

module.exports = nextConfig;
