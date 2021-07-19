const db = require('../data/db-config');
const { formatInventory } = require('../utils/format-inventory');

const findAll = async () => {
  const inventory = await db('inventory as i')
    .join('products as p', 'p.product_id', 'i.product_id')
    .join('colors as c', 'c.color_id', 'i.color_id')
    .join('sizes as s', 's.size_id', 'i.size_id')
    .join('brands as b', 'b.brand_id', 'p.brand_id')
    .join('genders as g', 'g.gender_id', 'p.gender_id')
    .join('categories as cat', 'cat.category_id', 'p.category_id')
    .join('discounts as d', 'd.discount_id', 'p.discount_id')
    .join('inventory_images as inv_img', 'inv_img.inventory_id', 'i.inventory_id')
    .join('images as img', 'img.image_id', 'inv_img.image_id')
    .select(
      'i.inventory_id',
      'i.quantity',
      'p.product_id',
      'p.product_name',
      'p.product_description',
      'p.product_price',
      'c.color_name',
      'cat.category_name',
      'g.gender_name',
      'b.brand_name',
      's.size_name',
      'd.discount_percent',
      'd.active as discount_active',
      'inv_img.*',
      'img.*'
    )
    .orderBy('i.inventory_id', 'asc');
  
  return formatInventory(inventory);
};

module.exports = {
  findAll
};