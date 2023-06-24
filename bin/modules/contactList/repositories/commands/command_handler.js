const Contact = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../config');
const db = new Mongo(config.get('/mongoDbUrl'));

module.exports.inputContact = async (payload) => {
  const contact = new Contact(db);
  const postCommand = async payload => contact.inputContact(payload);
  return postCommand(payload);
}