const request = require('supertest')
const assert = require('chai').assert

const url = 'http://localhost:5000';

describe('Test GET API PhoneBook', () => {

  describe('GET Contact', () => {
    
    it('test contacts', (done) => {
      request(url)
      .get('/contacts/')
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 200)
        assert.equal(res.body[0].name, 'Tester')
        assert.equal(res.body[0].mobilephone, '0552188889999')
        assert.equal(res.body[0].homephone, '0552133332222')
        done()
      })
    });

    it('test contacts not found', (done) => {
      request(url)
      .get('/contacts/?name=TesterQAS')
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 404)
        assert.equal(res.text, 'Not Found');
        done()
      })
    });

    it('test contacts non-existent route', (done) => {
      request(url)
      .get('/qaspmeeting')
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 404)
        done()
      })
    });
  });
});
