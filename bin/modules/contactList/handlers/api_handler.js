const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
const { inputData } = require('../repositories/commands/command_model');
const commandHandler = require('../repositories/commands/command_handler');
const queryHandler = require('../repositories/queries/query_handler');
const _ = require('lodash');
const { BadRequestError } = require('../../../helpers/error');
const { result } = require('validate.js');

module.exports.inputContact = async (req, res) => {
  const payload = req.body;
  const validatePayload = validator.isValidPayload(payload, inputData);

  const postRequest = async (result) => {
    return result.err ? result : commandHandler.inputContact(result.data);
  };

  const sendResponse = async (result) => {
    (result.err)
      ? wrapper.response(res, 'fail', result, 'Failed to input contact', 400)
      : wrapper.response(res, 'success', result, 'Contact successfully added', 201);
  };

  sendResponse(await postRequest(validatePayload));
};

module.exports.getContact = async (req, res) => {
  const numberPhone = req.query.numberPhone;

  const getData = async (numberPhone) => {
    let result;
    (numberPhone)
      ? result = queryHandler.getOneContact(numberPhone)
      : result = queryHandler.getAllContact();
    return result;
  };

  const sendResponse = async (result) => {
    (result.err)
      ? wrapper.response(res, 'fail', result, 'Failed to get all contact', 400)
      : wrapper.response(res, 'success', result, 'Success get all contact', 200);
  };

  sendResponse(await getData(numberPhone));
};

module.exports.updateContact = async (req, res) => {
  const numberPhone = req.query.numberPhone;
  const payload = req.body;

  if (_.isEmpty(numberPhone)) {
    return wrapper.error(new BadRequestError('numberPhone cannot be empty'));
  }

  const putRequest = async (numberPhone, payload) => {
    return commandHandler.updateContact(numberPhone, payload);
  };

  const sendResponse = async (result) => {
    (result.err)
      ? wrapper.response(res, 'fail', result, 'Failed to update contact', 400)
      : wrapper.response(res, 'success', result, 'Success update contact', 200);
  };

  sendResponse(await putRequest(numberPhone, payload));
}