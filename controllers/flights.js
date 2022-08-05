const Flight = require('../models/flight');

module.exports = {
 index,
 new: newFlight,
 create
}

function index(req, res) {
  const now = new Date();
  console.log(now,'<-now');
  Flight.find({}, function(err, allFlights) {
    if(err) {
      res.send('Error finding ights');
    }
    res.render('flights/index.ejs', {
      flights: allFlights
    });
  })
}

function newFlight(req, res) {
  const newFlight = new Flight();
  const dateTime = newFlight.departs;
  const departsTime = dateTime.toISOString().slice(0, 16);
  res.render('flights/new.ejs', {departsTime});
}

function create(req, res) {

  Flight.create(req.body, function(err, flight) {
    if(err) {
      console.log(err, '<- err in the flight create function');
    }
    res.redirect('/flights');
  })
}