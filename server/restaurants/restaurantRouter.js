// 'use strict';
// const logger = require('./../../applogger');
// const router = require('express').Router();
// //const userCtrl = require('./userController');
//
// router.post('/add', function(req, res) {
//     logger.debug("Inside user post");
//     let user = req.body.name ;
//     res.send('Hello '+user);
// });
// router.post('/delete', function(req, res) {
//     logger.debug("Inside delete post");
//     let user = req.body;
//     res.send('Hello '+user);
// });
//
//
// // Get details of all user in the system
// router.get('/', function(req, res) {
//   console.log('Inside get');
//   res.send('response from user GET route check');
// });
//
// module.exports = router;

'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const restaurant = require('./restaurantEntity');
const restaurantController = require('./restaurantController');

router.post('/addrestaurant', restaurantController.addrestaurant);
router.delete('/deleterestaurant',restaurantController.deleterestaurant);

router.post('/findrestaurant', restaurantController.findrestaurant);

router.post('/updaterestaurant', restaurantController.updaterestaurant);

// Get details of all users in the system
router.get('/', function(req, res) {

  res.send('response from user GET route check');
});

module.exports = router;
