const discounts = [
  {
    discount_name: 'No Discount',  // 1
    discount_description: 'This is the discription for no discount',
    discount_percent: 0.00,
    active: 1
  },
  {
    discount_name: '10% Off',  // 2
    discount_percent: 0.1,
    active: 1
  },
  {
    discount_name: '25% Off',  // 3
    discount_percent: 0.25
  },
  {
    discount_name: '50% Off',  // 4
    discount_percent: 0.5
  },
  {
    discount_name: '75% Off',  // 5
    discount_percent: 0.75
  }
];

module.exports = {discounts}; 