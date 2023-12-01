// ecosystem.config.js
module.exports = {
    apps: [{
      name: 'xmaslights',
      script: 'xmasservice.js', // or whatever your main file is
      node_args: '--env-file .env'
    }]
};