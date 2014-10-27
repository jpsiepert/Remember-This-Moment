var mongoose = require("mongoose"),
	Schema = mongoose.Schema,

	User = new Schema ({
		firstName: {type: String, required: true},
		lastName: {type: String, required: true},
		birthday: {
			month: {type: String, required: true},
			day: {type: Number, required: true},
			year: {type: Number, required: true}
		},
		email: {type: String, required: true, unique: true},
		password: {type: String, required: true}
	})

module.exports = mongoose.model("User", User);