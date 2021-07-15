const db = require('../../data/db-config');

const findAll = async () => {
  const products = await db('products');
  return products;
};

module.exports = {
  findAll
};