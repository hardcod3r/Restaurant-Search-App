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
const userModel = require('./restaurantEntity').userModel;
const restaurantController = require('./restaurantController');

router.post('/addrestaurant', restaurantController.addrestaurant);
router.delete('/deleterestaurant',restaurantController.deleterestaurant);

router.post('/findrestaurant', restaurantController.findrestaurant);

router.post('/updaterestaurant', restaurantController.updaterestaurant);
	// router.delete('/delete', function(req, res){
	// 	logger.debug("Inside user post");
	// 	let db= new user(req.body);
	// 	db.delete();
	// 	db.send("Added successfully");
	// 	})
	// logger.debug("Received request"+JSON.stringify(req.body));
  // if(req.body)
  // {
  //   let user = new userModel(req.body);
  //   user.save(function(err){
  //   if(err){
  //     res.send(err);
  //   }
  //   else{
  //      res.json({message:'User saved successfully'});
  //   }
  //   });
  // }


// Get details of all users in the system
router.get('/', function(req, res) {

  res.send('response from user GET route check');
});

module.exports = router;
