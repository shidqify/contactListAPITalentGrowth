const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
const { inputData } = require('../repositories/commands/command_model');
const commandHandler = require('../repositories/commands/command_handler');

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
}