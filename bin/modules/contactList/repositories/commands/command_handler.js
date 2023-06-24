const Contact = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../config');
const db = new Mongo(config.get('/mongoDbUrl'));

module.exports.inputContact = async (payload) => {
  const contact = new Contact(db);
  const postCommand = async payload => await contact.inputContact(payload);
  return await postCommand(payload);
}

module.exports.updateContact = async (numberPhone, payload) => {
  const contact = new Contact(db);
  const putCommand = async (numberPhone, payload) => await contact.updateContact(numberPhone, payload);
  return await putCommand(numberPhone, payload);
}

module.exports.deleteContact = async (numberPhone) => {
  const contact = new Contact(db);
  const deleteCommand = async (numberPhone) => await contact.deleteContact(numberPhone);
  return await deleteCommand(numberPhone);
}