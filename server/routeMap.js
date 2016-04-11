var userCtrl = require('../server/controllers/user'),
	expenseCtrl = require('../server/controllers/expense');

exports.listenRoutes = function(app) {
	app.get('/(*)', function(req, res){
		res.render('index');
	});
	app.post('/user/authenticate', userCtrl.validateUser);
	app.post('/user/checkAvailability', userCtrl.checkAvailability);
	app.post('/user/create', userCtrl.createUser);

	app.post('/expense/fetch', expenseCtrl.fetchExpenses);
	app.post('/expense/add', expenseCtrl.addExpense);
}