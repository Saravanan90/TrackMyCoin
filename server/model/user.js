var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	username: { type: String, unique: [true, 'REG_USER_DUPLICATE'], required: [true, 'REG_USER_MISSING'] },
	email: { type: String, required: [true, 'REG_EMAIL_MISSING'] },
	password: { type: String, required: [true, 'REG_PWD_MISSING'] }
});

exports.User = mongoose.model('User', userSchema);