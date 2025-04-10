
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Holograms = require('./models/Holograms');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var HologramsRouter = require('./routes/Holograms');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);



// We can seed the collection if needed on server start

async function recreateDB() {
  // Delete everything
await Holograms.deleteMany();

  let instance1 = new Holograms({
    origin: "Interference of Light",
    tone: 'Yellow',
    clarity: 8
  });
  //origin: 'Interference of Light', tone: 'Yellow', clarity: 8 }, { origin: 'Recording the Pattern', tone: 'Black', clarity: 6 }, { origin: 'Reconstructing the Image', tone: 'White', clarity: 9 }]

  instance1.save().then(doc => {
    console.log("First object saved");
  }).catch(err => {
    console.error(err);
  });

  let instance2 = new Holograms({
    origin: "Recording the Pattern",
    tone: 'Black',
    clarity: 6
  });
  //origin: 'Interference of Light', tone: 'Yellow', clarity: 8 }, { origin: 'Recording the Pattern', tone: 'Black', clarity: 6 }, { origin: 'Reconstructing the Image', tone: 'White', clarity: 9 }]

  instance2.save().then(doc => {
    console.log("Second object saved");
  }).catch(err => {
    console.error(err);
  });
  let instance3 = new Holograms({
    origin: "Reconstructing the Image",
    tone: 'White',
    clarity: 9
  });
  //origin: 'Interference of Light', tone: 'Yellow', clarity: 8 }, { origin: 'Recording the Pattern', tone: 'Black', clarity: 6 }, { origin: 'Reconstructing the Image', tone: 'White', clarity: 9 }]

  instance3.save().then(doc => {
    console.log("Third object saved");
  }).catch(err => {
    console.error(err);
  });

  
}

let reseed = true;
if (reseed) {
  recreateDB();
}

// View engine setup



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Holograms', HologramsRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

module.exports = app; // Ensure this line is present
