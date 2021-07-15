const router = require('express').Router();

const categoriesRouter = require('./categories/category-router');
const productsRouter = require('./products/product-router');

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);

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