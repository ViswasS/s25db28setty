var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Holograms', { title: 'Search Results - Holograms' });
});


var express = require('express');
const Holograms_controlers= require('../controllers/Holograms');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET costumes */
router.get('/', Holograms_controlers.Holograms_view_all_Page );

/* GET detail costume page */
router.get('/detail', Holograms_controlers.Holograms_view_one_Page);

router.get('/Holograms/:id', Holograms_controlers.Holograms_list_detail);
/* GET create costume page */
router.get('/create', Holograms_controlers.Holograms_create_Page);

/* GET create update page */
router.get('/update', secured, Holograms_controlers.Holograms_update_Page);

/* GET delete costume page */
router.get('/delete', Holograms_controlers.Holograms_delete_Page);



module.exports = router;



