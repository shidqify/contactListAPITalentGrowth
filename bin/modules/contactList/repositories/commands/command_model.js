const joi = require('joi');

const inputData = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  numberPhone: joi.string().required(),
  address: joi.string().required(),
});

module.exports = {
  inputData,
}