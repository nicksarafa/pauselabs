const path = require('path')

module.exports = {
  test: 'Export app module',
  cwd: path.resolve(path.join(__dirname, '../')),
  cmd: 'node',
  args: ['app.js'],
  port: 8081,
}