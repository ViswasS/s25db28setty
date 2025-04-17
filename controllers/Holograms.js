var Holograms = require('../models/Holograms');
// List of all Holograms
//exports.Holograms_list = function(req, res) {
//res.send('NOT IMPLEMENTED: Holograms list');
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
// for a specific Holograms.
exports.Holograms_list_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Holograms detail: ' + req.params.id);
};
// Handle Holograms create on POST.
//exports.Holograms_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: Holograms create POST');
//};
// Handle Holograms create on POST.
exports.Holograms_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Holograms();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Holograms_type":"goat", "cost":12, "size":"large"}
    document.Holograms_type = req.body.Holograms_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    //Handlndle Holograms delete from on DELETE.
exports.Holograms_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Holograms delete DELETE ' + req.params.id);
};
// Handle Holograms update form on PUT.
exports.Holograms_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Holograms update PUT' + req.params.id);
};
// VIEWS
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
exports.Holograms_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Holograms.findById( req.params.id)
    // Do updates of properties
    if(req.body.Holograms_type)
    toUpdate.origin = req.body.origin;
    if(req.body.tone) toUpdate.tone = req.body.tone;
    if(req.body.clarity) toUpdate.clarity = req.body.clarity;
    if(req.body.checkboxsale) toUpdate.sale = true;
    else toUpdate.same = false;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

    // Handle Costume delete on DELETE.
exports.Holograms_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Holograms.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.Holograms_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Holograms.findById( req.query.id)
    res.render('Hologramsdetail',
    { title: 'Holograms Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a costume.
// query provides the id
exports.Holograms_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Holograms.findById(req.query.id)
    res.render('Hologramsupdate', { title: 'Holograms Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    //Handle a delete one view with id from query
    exports.Holograms_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Holograms.findById(req.query.id)
    res.render('Hologramsdelete', { title: 'Holograms Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
    
    
    

// GET request for one Holograms.

// for a specific Holograms.
exports.Holograms_list_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Holograms.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Holograms_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Hologramscreate', { title: 'Holograms Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
