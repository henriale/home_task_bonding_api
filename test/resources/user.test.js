import chai from "chai"
import chaiHttp from "chai-http"
import faker from "faker"

let expect = chai.expect

chai.use(chaiHttp)

describe('Users', () => {
  let user;

  describe('POST /user', () => {

    it('should respond status 400', (done) => {
      chai.request(sails.hooks.http.app)
        .post('/user')
        .end((err, res) => {
          expect(res).to.have.status(400)
          expect(res.body).to.be.an('object')
          expect(res.body.email).to.be.an('array')
          expect(res.body.username).to.be.an('array')
          done()
        })
    })

    it('should create user', (done) => {
      chai.request(sails.hooks.http.app)
        .post('/user')
        .send({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          username: faker.internet.userName()
        })
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.all.keys([
            'firstName',
            'lastName',
            'email',
            'username',
            'status',
            'createdAt',
            'updatedAt',
            'id'
          ])

          user = res.body
          done()
        })
    })
  })

  describe('PUT /user', () => {
    it('should update user', (done) => {
      chai.request(sails.hooks.http.app)
        .put('/user/' + user.id)
        .send({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          username: faker.internet.userName()
        })
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.firstName).not.to.be.equal(user.firstName)
          expect(res.body.lastName).not.to.be.equal(user.lastName)
          expect(res.body.email).not.to.be.equal(user.email)
          expect(res.body.status).to.be.equal(user.status)
          done()
        })
    })
  })

  describe('DELETE /user', () => {
    it('should delete user', (done) => {
      chai.request(sails.hooks.http.app)
        .delete('/user/' + user.id)
        .end((err, res) => {
          expect(res).to.have.status(204)
          done()
        })
    })

    it('should not find user', (done) => {
      chai.request(sails.hooks.http.app)
        .delete('/user/' + Number.MAX_SAFE_INTEGER)
        .end((err, res) => {
          expect(res).to.have.status(404)
          done()
        })
    })
  })

  describe('GET /user', () => {
    it('should return all users', (done) => {
      chai.request(sails.hooks.http.app)
        .get('/user')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.a('array')
          done()
        })
    })
  })
})
