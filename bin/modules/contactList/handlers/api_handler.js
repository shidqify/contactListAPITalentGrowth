const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
const { inputData } = require('../repositories/commands/command_model');
const commandHandler = require('../repositories/commands/command_handler');
const queryHandler = require('../repositories/queries/query_handler');

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

module.exports.getAllContact = async (req, res) => {
  const getData = async () => queryHandler.getAllContact();
  const sendResponse = async (result) => {
    (result.err)
      ? wrapper.response(res, 'fail', result, 'Failed to get all contact', 400)
      : wrapper.response(res, 'success', result, 'Success get all contact', 200);
  };

  sendResponse(await getData());
};