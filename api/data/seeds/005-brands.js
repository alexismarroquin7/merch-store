const { brands } = require('../sample-data/brands');

exports.seed = function(knex) {
  return knex('brands').insert(brands);
};
