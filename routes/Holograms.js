var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('Holograms', { title: 'Search Results: Holograms' });
});

module.exports = router;