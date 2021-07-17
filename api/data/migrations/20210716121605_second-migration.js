
exports.up = (knex) => {
  return knex.schema
  .createTable('sizes', sizes => {
    sizes.increments('size_id');
    sizes.string('size_name')
      .notNullable()
      .unique();
    sizes.string('size_description');
  })
  .createTable('colors', colors => {
    colors.increments('color_id');
    colors.string('color_name')
      .notNullable()
      .unique();
    colors.string('color_description');
  })
  .createTable('inventory', inventory => {
    inventory.increments('inventory_id');
    inventory.integer('quantity');
    inventory.timestamp('created_at')
      .defaultTo(knex.fn.now());
    inventory.integer('product_id')
      .unsigned()
      .notNullable()
      .references('product_id')
      .inTable('products')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    inventory.integer('size_id')
      .unsigned()
      .notNullable()
      .references('size_id')
      .inTable('sizes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    inventory.integer('color_id')
      .unsigned()
      .notNullable()
      .references('color_id')
      .inTable('colors')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('inventory');
  await knex.schema.dropTableIfExists('colors');
  await knex.schema.dropTableIfExists('sizes');
};
