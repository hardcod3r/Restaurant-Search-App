'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const userModel = require('./userEntity').userModel;
const userController = require('./userController');

router.post('/add', userController.add);

router.post('/find', userController.find);

router.post('/update', userController.update);

router.get('/', function(req, res) {

res.send('response from user GET route check');
});

module.exports = router;
