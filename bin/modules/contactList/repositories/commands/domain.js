const Query = require('../queries/query');
const Command = require('./command');
const wrapper = require('../../../../helpers/utils/wrapper');
const { ConflictError } = require('../../../../helpers/error');

class Contact {
  constructor(db) {
    this.command = new Command(db);
    this.query = new Query(db);
  }

  async inputContact(payload) {
    const {
      firstName,
      lastName,
      numberPhone,
      address
    } = payload;

    const contact = await this.query.findOneContact({ numberPhone });
    if (contact.data) {
      console.log('Contact already exist');
      return wrapper.error(new ConflictError('Contact already exist'));
    }

    const result = await this.command.insertContact({
      firstName,
      lastName,
      numberPhone,
      address
    })

    return wrapper.data(result.data);
  }
}

module.exports = Contact;