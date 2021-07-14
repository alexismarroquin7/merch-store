const products = require('../sample-data/products');

exports.seed = function(knex) {
  return knex('products').insert(products);
};
