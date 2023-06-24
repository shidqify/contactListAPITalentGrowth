class Query {
  constructor(db) {
    this.db = db;
  }

  async findOneContact(parameter) {
    this.db.setCollection('contact-info');
    const recordSet = await this.db.findOne(parameter);
    return recordSet;
  }
}

module.exports = Query;