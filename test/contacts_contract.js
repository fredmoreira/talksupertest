const request = require('supertest')
const assert = require('chai').assert
const Joi = require('joi')
const joiAssert = require('joi-assert')

const url = 'http://localhost:5000'
const schema_phonebook = require('./schema')

describe('Contract Test API PhoneBook', () => {
  describe('GET contacts contract test', () => {
    it('Contract validation', (done) => {
      request(url)
      .get('/contacts/')
      .end((err, res) => {
        assert.equal(res.status, 200)
        joiAssert(res.body, schema_phonebook, 'Erro no contrato da API PhoneBook')
        done(err)
      });
    });
  });
});
