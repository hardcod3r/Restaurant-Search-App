const logger = require('./../../applogger');
const restaurant = require('./restaurantEntity');
var restaurantController = {

  addrestaurant: function(req, res) {
    logger.debug("Inside user post");
    let db = new restaurant(req.body);
    db.save(function(err) {
      if (err) {
        res.send("Error:" + err);
      } else {
        res.send("Added restaurant successfully");
      }
    });
  },
  deleterestaurant: function(req, res) {
    logger.debug("Inside user post");
    //.	let id=new userModel(req.body.resId);
    restaurant.remove(req.body, function(err, docs) {
      if (err) {
        res.send("Error:" + err);
      } else {
        res.send("Deleted restaurant successfully");
      }
    });
  },
  updaterestaurant: function(req, res) {
    // userModel.update({"resId":req.body.resId}, function(err,docs){
    restaurant.update({
      "resId": req.body.resId
    }, {
      "resComments": req.body.Comments
    }, function(err) {
      if (err) {
        res.send("Error:" + err);
      } else {
        res.send("Updated restaurant successfully");
      }
    });
  },
  findrestaurant: function(req, res) {
    restaurant.find(function(err, docs) {
      if (err) {
        res.send("Error:" + err);
      } else {
        res.send("Read Restaurant successfully");
      }
    });
  }
}
module.exports = restaurantController;
