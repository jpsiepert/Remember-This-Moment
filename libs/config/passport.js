var LocalStrategy = requie("passport-local").Strategy,
	User = requier("../models/users");

module.exports = function(passport){
	passport.use("local-logain", new LocalStrategy({
		usernameField: "email",
		passwordField: "password",
		passReqToCallback: true //allows us ot pass back to entire request to the callback
	},
	function(req, email, password, done){//callback with email and pw
		User.findOne({"local.email": email}, function(err, user){
			if(err)
				return done(err);
			if(!user)
				return done(null, false, req.flash("loginMessage", "no user found."));
			if(!user.validPassword(password))
				return done(null, false, req.flash('loginMessage", "Oops! Wrong password'));

				return done(null, user);
		});
	}));
};