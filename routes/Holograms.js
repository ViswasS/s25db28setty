var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Holograms', { title: 'Search Results - Holograms' });
});


var express = require('express');
const Holograms_controlers= require('../controllers/Holograms');
var router = express.Router();
/* GET costumes */
router.get('/', Holograms_controlers.Holograms_view_all_Page );
module.exports = router;



