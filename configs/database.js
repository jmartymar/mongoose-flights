const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights');

mongoose.connection.on('connected', function() {
  console.log('Connected to Mongodb 27107');
})