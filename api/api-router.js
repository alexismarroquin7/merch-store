const router = require('express').Router();

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