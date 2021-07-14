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
    .createTable('genders', genders => {
      genders.increments('gender_id');
      genders.string('gender_name')
        .unique()
        .notNullable();
      genders.timestamp('created_at')
        .defaultTo(knex.fn.now());
    })
    .createTable('brands', brands => {
      brands.increments('brand_id');
      brands.string('brand_name')
        .unique()
        .notNullable();
      brands.timestamp('created_at')
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
      
      products.decimal('discount_id')
        .notNullable()
        .unsigned()
        .references('discount_id')
        .inTable('discounts')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      
      products.integer('category_id')
        .unsigned()
        .notNullable()
        .references('category_id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      
      products.integer('brand_id')
        .unsigned()
        .notNullable()
        .references('brand_id')
        .inTable('brands')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      
      products.integer('gender_id')
        .unsigned()
        .notNullable()
        .references('gender_id')
        .inTable('genders')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('products');
  await knex.schema.dropTableIfExists('genders');
  await knex.schema.dropTableIfExists('categories');
  await knex.schema.dropTableIfExists('discounts');
};
