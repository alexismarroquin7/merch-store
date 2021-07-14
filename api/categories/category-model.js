const db = require('../../data/db-config');

const findAll = async () => {
  await db('categories as cat');
};

module.exports = {
  findAll
};