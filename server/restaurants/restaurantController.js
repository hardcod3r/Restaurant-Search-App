var restaurant = require('./restaurantEntity');

var restaurantController={

      addrestaurant:function(req, res){
      	logger.debug("Inside user post");
      	let db= new userModel(req.body);
      	db.save(function(err){
      	if(err){
      		res.send("Error:"+err);
      	}
       else {
      	 	res.send("Added restaurant successfully");
       }
       });
     },
      deleterestaurant: function(req,res){
      	logger.debug("Inside user post");
      //.	let id=new userModel(req.body.resId);
      	userModel.remove({"resId":req.body.resId}, function(err){
      		if(err){
      			res.send("Error:"+err);
      		}
      	 else {
      		 	res.send("Deleted restaurant successfully"+req.body.resId);
      	 }
       });
     },
      findrestaurant:function(req, res) {
         userModel.find(req.body, function(err,docs){
           if(err){
             res.send("Error:"+err);
           }
           else if(docs!=null){
             res.send(docs);
           }
           else{
             res.send("incorrect");
           }
         });
      },
      updaterestaurant:function(req, res) {
         userModel.update(req.body.old, req.body.new, function(err,docs){
           if(err){
             res.send("Error:"+err);
           }
           else if(docs!=null){
             res.send("changed");
           }
           else{
             res.send("not changed");
           }
         });
      }
}
module.exports=restaurantController;
