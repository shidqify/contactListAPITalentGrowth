class Query {
  constructor(db) {
    this.db = db;
  }

  async findOneContact(parameter) {
    this.db.setCollection('contact-info');
    const recordSet = await this.db.findOne(parameter);
    return recordSet;
  }

  async findAllContact(parameter) {
    this.db.setCollection('contact-info');
    const recordSet = await this.db.findAllData(parameter);
    return recordSet;
  }
}

module.exports = Query;