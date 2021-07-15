const { categories } = require('../sample-data/categories');

exports.seed = function(knex) {
  return knex('categories').insert(categories);
};
