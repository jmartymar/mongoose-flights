const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/tickets");

router.get("/flights/:id/tickets/new", ticketController.index);
router.post("/flights/:id/tickets/new", ticketController.create);
router.delete("/flights/:flightId/tickets/:ticketId", ticketController.delete);

module.exports = router;
