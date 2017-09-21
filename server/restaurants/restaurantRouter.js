'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const restaurant = require('./restaurantEntity');
const restaurantController = require('./restaurantController');

router.post('/addrestaurant', restaurantController.addrestaurant);
router.delete('/deleterestaurant', restaurantController.deleterestaurant);

router.post('/findrestaurant', restaurantController.findrestaurant);

router.post('/updaterestaurant', restaurantController.updaterestaurant);

// Get details of all users in the system
router.get('/', function(req, res) {

  res.send('response from user GET route check');
});

module.exports = router;
