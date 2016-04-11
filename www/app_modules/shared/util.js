Date.prototype.getWeek = function() {
	//	Zero based indexed week.
	var that = new Date(this),
		date = that.getDate();
	that.setDate(1);
	var week = Math.floor((date + that.getDay() - 1) / 7);
	return week;
}

Date.prototype.getDayCount = function() {
	//	Zero based indexed week.
	var that = new Date(this);
	that.setMonth(that.getMonth() + 1);
	that.setDate(0);
	return that.getDate();
}