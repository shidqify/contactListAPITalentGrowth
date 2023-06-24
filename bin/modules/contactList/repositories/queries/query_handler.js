const Contact = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../config');
const db = new Mongo(config.get('/mongoDbUrl'));

module.exports.getAllContact = async () => {
  const contact = new Contact(db);
  const getData = async () => {
    const result = await contact.getAllContact();
    return result;
  }

  const result = await getData();
  return result;
};

module.exports.getOneContact = async (numberPhone) => {
  const contact = new Contact(db);
  const getData = async (numberPhone) => {
    const result = await contact.getOneContact(numberPhone);
    return result;
  }

  const result = await getData(numberPhone);
  return result;
}