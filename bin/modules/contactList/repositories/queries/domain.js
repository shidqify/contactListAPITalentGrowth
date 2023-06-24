const Query = require('./query');

class Contact {
  constructor(db) {
    this.query = new Query(db);
  }

  async getAllContact() {
    const result = await this.query.findAllContact();
    return result;
  }
}

module.exports = Contact;