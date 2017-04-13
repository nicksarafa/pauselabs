const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const app = require('../app')
const config = require('./config.test')

chai.use(chaiHttp)

describe('app.js', () => {
  it('it should return an HTML page via express-static', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.body.should.be.a('object')
        res.type.should.equal('text/html')
        res.charset.should.equal('UTF-8')
        done()
      })
  })
})
