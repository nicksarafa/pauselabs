const config = require(`./config.test`)
const utils = require(`nodejs-repo-tools`)

describe(`${config.test}/`, () => {
  if (!process.env.E2E_TESTS) {
    it(`should install dependencies`, (done) => {
      utils.testInstallation(config, done)
    }).timeout(120 * 1000)
  }
  require(`./app.test`)
})
