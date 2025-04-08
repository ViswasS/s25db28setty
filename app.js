var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Add mongoose and dotenv
const mongoose = require('mongoose');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var HologramsRouter = require('./routes/Holograms');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');

// Import your model (assuming it's Hologram)
const Hologram = require('./models/hologram');

var app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_CON, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async function () {
  console.log('Connection to DB succeeded');
  // Temporary seeding code
  await Hologram.deleteMany({});
  let hologram1 = new Hologram({ name: 'Holo1', brightness: 50, color: 'blue' });
  let hologram2 = new Hologram({ name: 'Holo2', brightness: 75, color: 'red' });
  let hologram3 = new Hologram({ name: 'Holo3', brightness: 30, color: 'green' });
  await hologram1.save();
  await hologram2.save();
  await hologram3.save();
  console.log('Sample holograms saved');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Holograms', HologramsRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;