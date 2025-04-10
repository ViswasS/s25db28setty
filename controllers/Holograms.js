var quarries = require('../models/Holograms');
// List of all Costumes
//exports.quarries_list = function(req, res) {
//res.send('NOT IMPLEMENTED: quarries list');
//};
exports.Holograms_list = async function(req, res) {
    try{
    theHolograms = await Holograms.find();
    res.send(theHolograms);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Costume.
exports.Holograms_list_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Holograms detail: ' + req.params.id);
};
// Handle Costume create on POST.
//exports.quarries_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: quarries create POST');
//};
// Handle Costume create on POST.
exports.Holograms_create_post = async function(req, res) {
console.log(req.body)
let document = new Holograms();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.origin = req.body.origin;
document.tone = req.body.tone;
document.clarity = req.body.clarity;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle Costume delete from on DELETE.
exports.Holograms_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Holograms delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Holograms_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Holograms update PUT' + req.params.id);
};
//VIEWS
// Handle a show all view
exports.Holograms_view_all_Page = async function(req, res) {
try{
theHolograms = await Holograms.find();
res.render('Holograms', { title: 'Holograms Search Results', results: theHolograms });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};