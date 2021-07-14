exports.up = async (knex) => {
  await knex.schema
    .createTable('discounts', (discounts) => {
      discounts.increments('discount_id');
      
      discounts.string('discount_name')
        .notNullable()
        .unique();
  
      discounts.string('discount_description');
      
      discounts.decimal('discount_percent')
        .notNullable()
        .unique();

      discounts.integer('active')
        .defaultTo(0);
      
      discounts.timestamp('created_at')
        .defaultTo(knex.fn.now());
    })
    .createTable('categories', (categories) => {
      categories.increments('category_id');
      
      categories.string('category_name')
        .notNullable()
        .unique();
      
      categories.string('category_description');
    
      categories.timestamp('created_at')
        .defaultTo(knex.fn.now());
    })
    .createTable('products', (products) => {
      products.increments('product_id');
      
      products.string('product_name')
        .notNullable()
        .unique();
      
      products.string('product_description');
    
      products.decimal('product_price')
        .notNullable();
    
      products.timestamp('created_at')
        .defaultTo(knex.fn.now());
      
      products.integer('discount_id')
        .unsigned()
        .references('discount_id')
        .inTable('discounts')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      
      products.integer('category_id')
        .unsigned()
        .references('category_id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('products');
  await knex.schema.dropTableIfExists('categories');
  await knex.schema.dropTableIfExists('discounts');
};
