const router = require('express').Router();

const categoriesRouter = require('./categories/category-router');
const productsRouter = require('./products/product-router');
const inventoryRouter = require('./inventory/inventory-router');

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);
router.use('/inventory', inventoryRouter);

router.get('/', (req, res) => {
  res.status(200).json({
    greet: 'hello'
  });
});

router.use((err, req, res, next) => { //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;