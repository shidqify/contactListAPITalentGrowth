const joi = require('joi');
const validate = require('validate.js');
const wrapper = require('../../../helpers/utils/wrapper');

const isValidPayload = (payload, constraint) => {
  const { value, error } = constraint.validate(payload);
  if(!validate.isEmpty(error)){
    return wrapper.error('fail', error, 409);
  }
  return wrapper.data(value, 'success', 200);

};

module.exports = {
  isValidPayload
};