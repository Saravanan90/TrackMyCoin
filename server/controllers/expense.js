var expenseService = require('../services/expense');

exports.addExpense = function(req, res) {
	expenseService.addExpense(req.body.user, req.body.expense, function(err) {
		res.json({
			dbErr: err
		});
	})
}

exports.fetchExpenses = function(req, res) {
	var date = new Date(),
		today = new Date(
			date.getUTCFullYear(),
			date.getUTCMonth(),
			date.getUTCDate()
		);
	expenseService.fetchExpense(req.body.user, today.getFullYear(), function(err, expenses) {
		res.json({
			dbErr: err,
			expenses: formatExpenses(expenses),
			today: today
		});
	})
}

function formatExpenses(expenses) {
	var expObj = {};
	for(var index = 0, length = expenses.length; index < length; index++){
		var monthData = expenses[index];
			dayExpenses = monthData.data,
			monthExp = {};
		for(var child = 0, max = dayExpenses.length; child < max; child++){
			var dayData = dayExpenses[child],
				date = new Date(dayData.date).getDate();
			monthExp[date] = dayData.expenses;
		}
		expObj[monthData._id - 1] = monthExp;
	}
	return expObj;
}