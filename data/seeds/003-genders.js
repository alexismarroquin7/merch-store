const genders = require('../sample-data/genders');

exports.seed = function(knex) {
  return knex('genders').insert(genders);
};
