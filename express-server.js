
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	port = 9393,
	mongoUri = "mongodb://localhost/remember",
	UserController = require("./libs/controllers/userController"),
	PostController = require("./libs/controllers/postController"),
	connection = mongoose.connection,
	cors = require("cors"),
	passport = require("passport"),
	LocalStrategy = require("passport-local"),
	User = require("./libs/Models/users"),
	session = require("express-session");
	

app.use(express.static(__dirname + "/public/"));

app.use(bodyParser());

app.use(cors());

//app.use(morgan("dev"));//log every request to the console

//app.use(cookie());// read cookies (needed for auth)

app.use(session({secret: "trytorememberallthesemoments"}));

app.use(passport.initialize());

app.use(passport.session());//persistent login sessions

passport.use(new LocalStrategy(
	{
		usernameField: "email",
		passwordField: "password"//also tried User.comparePassword
	},
  function(email, password, done) {
  	//User.comparePassword();
    User.findOne({ email: email}, function (err, user) {
    	//User.comparePassword
    	console.log("express-server line 43 email password ", email, password);
      if (err) { 
      	console.log(err);
      	return done(err); 
      } else {
      	user.comparePassword(password, function(err, isMatch){
      		if(err){
      		return done(err)
      		} else {
      			if(!isMatch){
      				console.log("Passwords dont match line 50")
      				return done(false)
      			} else {
      				console.log(user, "Passwords matched line 52")
				 	return done(null, user);
      			}
  			}
      	})
      }
      //User.comparePassword;
      //if (!user) { return done(null, false); }
      //if (!user.verifyPassword(password)) { return done(null, false); }
      //return done(null, user); TRYING COMPAREPASSWORD METHOD INSTEAD
    });
  
}));

//app.use(flash())// used for flash messages stored in session

mongoose.connect(mongoUri);

connection.once("open", function(){
	console.log("express server is quacking")
})

var authenticateUser = function(req, res, next){
	passport.authenticate("local", function(err, user, info){
		console.log("express-server line 61 user: ", user);
		if(!user){
			return res.status(400).send(err, "user or password incorrect");
		}
		req.logIn(user, function(err){
			user.password = '';
			return res.status(200).send(user);
		});
	})(req, res, next);
}


var requireAuth = function(req, res, next){
	if(!req.isAuthenticated()){
		return res.status(401).end()
	}
	next();
}
//app.get("/users", UserController.get)

app.post("/newUser", UserController.post)

app.post("/login", authenticateUser);

app.post("/logout", function(req, res){
	console.log("made it to the server")
	req.logout();
	return res.status(200).end();
});

app.get("/user", requireAuth, UserController.getUser)

app.put("/user/:userid", requireAuth, UserController.updateUser)

//to do set up to get posts for just that user
app.get("/user/posts/:userid", requireAuth, PostController.getPosts);

app.post("/user/post/:userid", requireAuth, PostController.addPost);

app.get("/main", requireAuth, PostController.getPosts);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.listen(port, function(){
	console.log("express")
})

