var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Holograms_controller = require('../controllers/Holograms');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Holograms', Holograms_controller.Holograms_create_post);
// DELETE request to delete Costume.
router.delete('/Holograms/:id', Holograms_controller.Holograms_delete);
// PUT request to update Costume.
router.put('/Holograms/:id', Holograms_controller.Holograms_update_put);
// GET request for one Costume.
router.get('/Holograms/:id', Holograms_controller.Holograms_list_detail);
// GET request for list of all Costume items.
router.get('/Holograms', Holograms_controller.Holograms_list);
module.exports = router;