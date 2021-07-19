const {inventory_images} = require('../sample-data/inventory_images');

exports.seed = function(knex) {
  return knex('inventory_images').insert(inventory_images);
};
