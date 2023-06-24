const Query = require('./query');

class Contact {
  constructor(db) {
    this.query = new Query(db);
  }

  async getAllContact() {
    const result = await this.query.findAllContact();
    return result;
  }

  async getOneContact(numberPhone) {
    const result = await this.query.findOneContact({ numberPhone });
    return result;
  }
}

module.exports = Contact;