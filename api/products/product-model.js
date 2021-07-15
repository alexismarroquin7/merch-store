const db = require('../data/db-config');
const { formatProducts } = require('../utils/format-products');

const findAll = async () => {
  const rows = await db('products as p')
    .join('genders as g', 'g.gender_id', 'p.gender_id')
    .join('categories as c', 'c.category_id', 'p.category_id')
    .join('discounts as d', 'd.discount_id', 'p.discount_id')
    .join('brands as b', 'b.brand_id', 'p.brand_id')
    .select(
      'p.product_id',
      'p.product_name',
      'p.product_description',
      'p.product_price',
      'p.created_at',
      'b.brand_name',
      'g.gender_name',
      'c.category_name',
      'd.discount_percent',
      'd.active as discount_active',
    );
  return formatProducts(rows);
};

module.exports = {
  findAll
};