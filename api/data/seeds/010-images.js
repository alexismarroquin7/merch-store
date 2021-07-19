const {images} = require('../sample-data/images');

exports.seed = function(knex) {
  return knex('images').insert(images);
};
