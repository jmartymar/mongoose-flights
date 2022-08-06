const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flights');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', flightController.index);
router.get('/new', flightController.new);
router.get('/:id', flightController.show);

router.post('/', flightController.create);

module.exports = router;
