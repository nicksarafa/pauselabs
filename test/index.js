const config = require('./config.test')
const utils = require('nodejs-repo-tools')

describe('index.js', () => {
  if (!process.env.E2E_TESTS) {
    it('it should install dependencies', (done) => {
      utils.testInstallation(config, done)
    })
  }
})