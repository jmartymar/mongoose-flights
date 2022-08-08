const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  index,
  create,
  delete: deleteTicket,
};

function index(req, res) {
  Flight.findById(req.params.id, function (err, flightDocument) {
    if (err) {
      res.send("Error finding flights");
    }
    res.render("tickets/new.ejs", {
      flight: flightDocument,
    });
  });
}

function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body, function (err, ticket) {
    if (err) {
      console.log(err, "<- err in the ticket create function");
    }
    res.redirect(`/flights/${req.params.id}`);
  });
}

function deleteTicket(req, res) {
  console.log(req.params, "<- req.params");
  Ticket.deleteOne({ _id: req.params.ticketId }, function (err, ticket) {
    res.redirect(`/flights/${req.params.flightId}`);
  });
}
