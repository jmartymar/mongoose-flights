var express = require('express');
var router = express.Router();
const destinationController = require('../controllers/destinations')

router.post('/flights/:id/destinations', destinationController.create);
router.delete('/flights/:flightId/destinations/:destinationId', destinationController.delete);


module.exports = router;