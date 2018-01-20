// This file is reached after every request and such!

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/book');
var app = express(); // Starts our app here

// After variable lines
// connection string using mongoose:
// MongoDB Atlas

// For example, if your password is @bc123, you must escape the @ character when specifying the password in the connection string; i.e. %40bc123.
// % = %25
// For driver 3.6 or later
// var mongoDBuri = "mongodb+srv://yenairoot:lUv4rt5091!5@yenaideum-app-qybyd.mongodb.net/yaddb";

// For driver 3.4 earlier, Mongoose uses this

// Below is not used if using PostGreSQL
/*
var mongoDBuri = "mongodb://yenairoot:lUv4rt5091!5@yenaideum-app-shard-00-00-qybyd.mongodb.net:27017,yenaideum-app-shard-00-01-qybyd.mongodb.net:27017,yenaideum-app-shard-00-02-qybyd.mongodb.net:27017/yaddb?ssl=true&replicaSet=yenaideum-app-shard-0&authSource=admin";

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(mongoDBuri, { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
*/

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

// other paths and such
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);

// From https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
// default catch-all route
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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