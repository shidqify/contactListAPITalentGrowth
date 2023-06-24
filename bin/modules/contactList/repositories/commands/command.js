class Command {
  constructor(db) {
    this.db = db;
  }

  async insertContact(payload) {
    this.db.setCollection('contact-info');
    const result = await this.db.insertOne(payload);
    return result;
  }
}

module.exports = Command;