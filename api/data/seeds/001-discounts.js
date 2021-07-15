const discounts = require('../sample-data/discounts');

exports.seed = function(knex) {
  return knex('discounts').insert(discounts);
};
