var Expense  = require('../model/expense').Expense;

exports.fetchExpense = function(username, year, callback) {
	var uid = username + year;
	Expense.aggregate([
		{ $match: {uid: uid} },
		{ $group: {
				_id: {month: {$month: "$date"}, date: {$dayOfYear : "$date"}},
				expenses: { $first: "$expenses"},
				date: { $first: "$date" }
			}
		},
		{ $group: {
				_id: "$_id.month",
				data: { 
					'$push': {
						'date': "$date",
						'expenses': "$expenses"
					}
				}
			}
		}
	], function(err, expenses) {
		callback(err, expenses);
	});
}

exports.addExpense = function(username, expense, callback) {
	var date = new Date(expense.date),
		uid = username + date.getFullYear();

	Expense.update(
		{ uid: uid, date: date}, 
		{ $push: { expenses: { $each: expense.expenses } } }, 
		{ upsert: true},
		function(err) {
			callback(err);
		}
	);
}