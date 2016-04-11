var mongoose = require('mongoose'),
	db = mongoose.connection;

db.on('error', console.error);

db.once('open', function() {
	console.log('DB Connection Established...');
});

exports.connect = function(dburl, callback) {
	mongoose.connect(dburl);
}
exports.disconnect = function(callback) {
	mongoose.disconnect(callback);
}