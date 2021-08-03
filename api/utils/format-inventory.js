const formatDiscount = (row) => {
  let product;

  const fullPrice = Boolean(
    row.discount_active === 0 ||
    row.discount_percent === "0.00"
  );

  if(fullPrice){
    product = {
      ...row,
      discount_percent: null,
      discount_active: false 
    };
  } else {
    const amountOffPrice = (row.product_price * Number(row.discount_percent)).toFixed(2);
    const discount_price = `${row.product_price - amountOffPrice}`;

    product = {
      ...row,
      discount_price,
      discount_active: true
    };
  }

  return product;
};

const formatInventory = inventory => {
  if (!inventory){
    return inventory;
  }

  const product_indexes = inventory.map((product, idx) => [idx, product.product_id]);

  for(let i = 0, len = product_indexes.length; i<len ; i++){
    

    // for(let j = 0; len = product_indexes[i].length; j<len ; j++){
      // console.log(i)
      // console.log(j)
    // }
  
  }
  
  return inventory;
};


module.exports = {
  formatInventory
};