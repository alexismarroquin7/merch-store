const { inventory } = require('../sample-data/inventory');

exports.seed = function(knex) {
  return knex('inventory').insert(inventory);
};
