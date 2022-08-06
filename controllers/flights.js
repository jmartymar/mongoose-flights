const Flight = require('../models/flight');

module.exports = {
 index,
 new: newFlight,
 create,
 show
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

function show(req, res) {
  const arrivalTime = getFlightTime();
  console.log(arrivalTime, '<-arrivalTime');
  const destinationAirports = ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'];
  Flight.findById(req.params.id, function(err, flightDocument) {
    sortArrivalTime(flightDocument);
    const existingDestinations = getExistingDestinations(flightDocument);
    res.render('flights/show', { flight: flightDocument, arrivalTime, existingDestinations, destinationAirports });
  });
}

function newFlight(req, res) {
  const departsTime = getFlightTime();
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

function sortArrivalTime(flightObject) {
  return flightObject.destinations.sort((a, b) => a.arrival - b.arrival); 
}

function getExistingDestinations(flightObject) {  
  return flightObject.destinations.map(({airport}) => airport);
}

function getFlightTime() {
  const newFlight = new Flight();
  const dateTime = newFlight.departs;
  const flightTime = dateTime.toISOString().slice(0, 16);
  return flightTime;
}

