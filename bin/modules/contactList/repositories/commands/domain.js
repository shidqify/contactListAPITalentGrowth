const Query = require('../queries/query');
const Command = require('./command');
const wrapper = require('../../../../helpers/utils/wrapper');
const { ConflictError, NotFoundError } = require('../../../../helpers/error');

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
  };

  async updateContact(numberPhone, payload) {
    const contact = await this.query.findOneContact({ numberPhone });
    if (!contact.data) {
      console.log('Contact didn\'t exist');
      return wrapper.error(new NotFoundError('Contact didn\'t exist'));
    }

    const result = await this.command.updateContact(numberPhone, payload);
    return wrapper.data(result.data);

  }
}

module.exports = Contact;