const db = require('../data/db-config');

const findAll = async () => {
  const categories = await db('categories');
  return categories;
};

const findById = async (category_id) => {
  const category = await db('categories as cat')
    .where({ category_id })
    .first();
  return category;
};

module.exports = {
  findAll,
  findById
};