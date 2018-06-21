const Joi = require('joi')

const schema_phonebook = Joi.array().items({
  _id: Joi.string().max(24),
  name: Joi.string(),
  mobilephone: Joi.string(),
  homephone: Joi.string()
});

module.exports = schema_phonebook
