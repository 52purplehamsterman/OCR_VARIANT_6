const { Low, JSONFile } = require('lowdb');
const adapter = new JSONFile('../db.json');
const db = new Low(adapter);
db.read();

module.exports = db;