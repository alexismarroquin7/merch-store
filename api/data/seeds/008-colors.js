const { colors } = require('../sample-data/colors');

exports.seed = function(knex) {
  return knex('colors').insert(colors);
};
