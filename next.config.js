const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['styles'] = path.join(__dirname, 'styles')
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    return config
  },
}
