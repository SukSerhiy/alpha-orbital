const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['www.alpha-orbital.com']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}
