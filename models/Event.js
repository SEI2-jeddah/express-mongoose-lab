const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description :{
		type: String,
		required: true
	},	
	reportedBy :{
		type: String,
		required: true
	},
	handledBy :{
		type: String,
		default: ''
	},
	completed :{
		type: Boolean,
		default: false
	},
	dateReported:{
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Evants', eventSchema)



