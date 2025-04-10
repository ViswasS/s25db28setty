var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Holograms', { title: 'Search Results - Holograms' });
});


// var express = require('express');
const Holograms_controllers= require('../controllers/Holograms');
var router = express.Router();
/* GET costumes */
router.get('/', Holograms_controllers.Holograms_view_all_Page );
module.exports = router;


module.exports = router;