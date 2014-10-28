var mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	bcrypt = require("bcrypt-nodejs");


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
//generates a hash
User.methods.generateHash = function(password){
	return bcrypt.hashSynch(password, bcrypt.genSaltSync(8))
}

User.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model("User", User);8