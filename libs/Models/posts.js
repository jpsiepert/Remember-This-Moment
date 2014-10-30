var mongoose = require("mongoose"),
	Schema = mongoose.Schema,


	Post = new Schema ({
	text: {type: String, required: true},
	time: {type: Date, default: Date.now}

	})
//generates a hash


module.exports = mongoose.model("Post", Post);