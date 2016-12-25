let chai = require('chai')
let chaiHttp = require('chai-http')
let expect = chai.expect

chai.use(chaiHttp)

describe('Users', () => {
  describe('GET /user', () => {
    it('should return all users', (done) => {
      chai.request(sails.hooks.http.app)
        .get('/user')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.gita('array')
          done()
        })
    })
  })
})
