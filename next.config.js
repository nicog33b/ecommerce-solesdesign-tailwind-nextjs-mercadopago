const result = require('dotenv').config();

if (result.error) {
  throw result.error;
}

const nextConfig = {};

module.exports = nextConfig;
