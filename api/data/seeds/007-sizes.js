const { sizes } = require('../sample-data/sizes');

exports.seed = function(knex) {
  return knex('sizes').insert(sizes);
};
