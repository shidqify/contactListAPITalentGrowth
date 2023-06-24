class Command {
  constructor(db) {
    this.db = db;
  }

  async insertContact(payload) {
    this.db.setCollection('contact-info');
    const result = await this.db.insertOne(payload);
    return result;
  }

  async updateContact(numberPhone, payload) {
    this.db.setCollection('contact-info');
    const result = await this.db.upsertOne({ numberPhone }, {
      $set: payload 
    });
    return result;
  }

  async deleteContact(numberPhone) {
    this.db.setCollection('contact-info');
    const result = await this.db.deleteOne({ numberPhone });
    return result;
  }
}

module.exports = Command;