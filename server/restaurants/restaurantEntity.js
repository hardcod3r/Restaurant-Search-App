// let mongoose = require('mongoose');
//
// let resSchema = mongoose.model('restaurant', {
//     resId: {
//         type: Number,
//         required : true
//     },
//     resName: {
//         type: String,
//         required : true
//     },
//     description: {
//         type: String,
//         required : true
//     },
//     city: {
//         type: String,
//         required : true
//     },
//     review: {
//         type: Number
//     },
//     comments: {
//         type: String
//     }
// });
//
// module.exports = {resSchema};
//

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	resId:{
		type : Number,
		required : true
	},
	resname:{
		type : String,
		required : true
	},
	Description:{
		type : String,
		required : true
	},
	location:{
		type : String,
		required : true
	},
	Review:{
		type : Number,
		required : true
	},
	Reviewcount:{
		type : Number,
		required : true
	}
});
const restaurants = mongoose.model('restaurants', schema);

module.exports = restaurants;
