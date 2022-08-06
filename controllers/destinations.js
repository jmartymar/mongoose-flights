const { resolveInclude } = require('ejs');
const Flight = require('../models/flight');

module.exports = {
	create,
  delete: deleteDestination
}

function create(req, res){
  Flight.findById(req.params.id, function(err, flightDocument) {
    flightDocument.destinations.push(req.body);
    flightDocument.save(function(err){
      res.redirect(`/flights/${req.params.id}`);
    });    
  });
}

function deleteDestination(req, res) {
  Flight.findById(req.params.flightId, function(err, flightDocument) {
    flightDocument.destinations.pull(req.params.destinationId);
    flightDocument.save(function(err) {
      res.redirect(`/flights/${req.params.flightId}`);
    });
  });
}