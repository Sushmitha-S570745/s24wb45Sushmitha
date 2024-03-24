const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  let query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  res.render('grid', { title: "Grid", query: query });
});

module.exports = router;
