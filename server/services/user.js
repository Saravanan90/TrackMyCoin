var User  = require('../model/user').User;

exports.createUser = function(userdata, callback) {
	var	newUser =  new User({
		username: userdata.username,
		password: userdata.password,
		email: userdata.email,
	});
	newUser.save(function(err, data) {
		console.log("Reg Err..." + err);
		console.log("Reg Data..." + data);
		callback(err, data);
	});
}

exports.checkUserNameAvailablity = function(username, callback) {
	User.findOne({
		username: username
	}, function(err, user) {
		console.log("chewck Err..." + err);
		console.log("chewck Data..." + user);
		callback(err, Boolean(user));
	})
}

exports.authUser = function(userdata, callback) {
	User.findOne({
		username: userdata.username
	}, function(err, user) {
		console.log("Login Err..." + err);
		console.log("Login Data..." + user);
		if(!err)
			var errCode = user ? (user.password === userdata.password ?  null : 'AUTH_FAILED' ) : 'AUTH_NOACC';
		callback(err, errCode);
	});
}