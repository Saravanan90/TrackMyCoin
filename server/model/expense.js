var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var	expenseSchema = new Schema({
		category: {type: String, required: true},
		desc: {type: String, required: true},
		cost: {type: Number, required: true}
	}),
	dailyExpenseSchema = new Schema({
		expenses: [expenseSchema],
		date: {type: Date, required: true},
		uid: {type: String, required: true} //	this is the index key of expense Collection
					//	whose value is UserId + Year of expense
					//	since expenses are fetched on per year basis.
	});

exports.Expense = mongoose.model('Expense', dailyExpenseSchema);
	