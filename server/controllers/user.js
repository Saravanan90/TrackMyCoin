var userService = require('../services/user');

exports.validateUser = function(req, res) {
	userService.authUser(req.body, function(err, errCode) {
		res.json({
			dbErr: err,
			errCode: errCode
		});
	})
}
exports.checkAvailability = function(req, res) {
	userService.checkUserNameAvailablity(req.body.username, function(err, user) {
		res.json({
			dbErr: err,
			user: user
		});
	})
}
exports.createUser = function(req, res) {
	userService.createUser(req.body, function(err, user) {
		res.json({
			dbErr: err
		});
	})
}