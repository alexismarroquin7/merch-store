const router = require('express').Router();
const { findAll } = require('./category-model');

router.get('/', async (req, res, next) => {
  try {
    const categories = await findAll();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;