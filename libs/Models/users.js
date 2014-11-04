var mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	// post = require("./posts"),
	ObjectId = Schema.Types.ObjectId,
	bcrypt = require("bcrypt");
	SALT_WORK_FACTOR = 10;


	User = new Schema ({
		firstName: {type: String, required: true},
		lastName: {type: String, required: true},
		birthday: {
			month: {type: String, required: true},
			day: {type: Number, required: true},
			year: {type: Number, required: true}
		},
		email: {type: String, required: true, unique: true},
		password: {type: String, required: true},
		posts: [{type: ObjectId, ref: 'Post'}]
		
	})
//generates a hash
// User.pre.generateHash = function(User.password){
// 	return bcrypt.hash(password, bcrypt.)
// }

User.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

//also tried module.exports
User.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        console.log(isMatch, "Is Match !!!!!!!!!!!!!!")
        cb(null, isMatch);
    });
};


// User.statics.getAuthenticated = function(email, password, cb){
// 	this.findOne({email: email}, function(err, user){
// 		if(err) return cb(err);
// 		if(!user){
// 			return cb(null, null)
// 		}
// 	})
// }
module.exports = mongoose.model("User", User);