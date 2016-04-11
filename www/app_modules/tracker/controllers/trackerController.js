angular.module('tracker').controller('TrackerController', function($scope, trackerData, $ionicModal) {
	var data = trackerData.data,
		yearExpense = data.expenses || [];

	//	Expenses will hold array of Month Expenses [Jan Exp, Feb Exp, Mar Exp ....]
	//	Month Expenses will be dictionary of Day Expenses {1: exp, 2: exp, 3: exp...}

	var today = data.today ? new Date(data.today) : new Date();

	//	By default, app loads this year data and the default date details are retained in defaultDate variable.
	//	tracker date will be the user selected date, at app start it defaults to defaultDate.
	$scope.default = setTrackerDate(today);
	$scope.tracker = setTrackerDate(today);
	
	function setTrackerDate(today) {
		return{
			day: today.getDate(),
			week: today.getWeek(),
			month: today.getMonth(),
			year: today.getFullYear()
		}
	}

	function processMonthExpense(expObj) {
		var expenses = [];
		for(var day in expObj){
			expenses.push(expObj[day]);
		}
		return processExpense(expenses);
	}

	function processExpense(expArr) {
		var summary = {},	
			total = 0,	
			details = {};
		
		for(var index = 0, length = expArr.length; index < length; index++){
			var dayExp = expArr[index];
			for(var child = 0, max = dayExp.length; child < max; child++) {
				var exp = dayExp[child],
					category = exp.category,
					cost = exp.cost;
				total += cost;
				if( summary[category] ){
					summary[category] += cost;
					details[category].push({
						desc: exp.desc,
						cost: cost
					});
				}else{
					summary[category] = cost;
					details[category] = [{
						desc: exp.desc,
						cost: cost
					}];
				}
			}
		}
		var chartData = getChartData(summary);
		return {
			chartData: chartData,	//	for plotting chart
			total: total,		//	for header display
			details: details	//	for list display
		};
	}

	function getChartData(summary) {
		var labels = [],
			amounts = [];
		for(var category in summary){
			labels.push(category);
			amounts.push(summary[category]);
		}
		return{
			labels: labels,
			data: amounts
		}
	}

	$scope.getDayExpense = function() {
		var tracker = $scope.tracker,
			monthExp = yearExpense[tracker.month];
		if(!monthExp)
			return 'NO_MONTH_EXP';

		var dayExp = monthExp[tracker.day];
		return dayExp ? processExpense([dayExp]) : 'NO_DAY_EXP';
	}

	$scope.getWeekExpense = function(startDate, endDate) {
		var monthExp = yearExpense[$scope.tracker.month];

		if(!monthExp)
			return 'NO_MONTH_EXP';

		var	expenses = [],
			date = +startDate;
		while(date < +endDate){
			var dayExp = monthExp[date];
			if(dayExp)
				expenses.push(monthExp[date]);
			date++;
		}
		return expenses.length ? processExpense(expenses) : 'NO_WEEK_EXP';
	}

	$scope.getMonthExpense = function() {
		var monthExp = yearExpense[$scope.tracker.month]
		return monthExp ? processMonthExpense(monthExp) : 'NO_MONTH_EXP';
	}

	$scope.updateExpense = function(expense) {
		var date = expense.date,
			month = date.getMonth(),
			day = date.getDate();
		var exp = yearExpense[month][day];
		if(exp){
			var expenses = expense.expenses;
			while(expenses.length){
				exp.push(expenses.shift());
			}
		}else
			yearExpense[month][day] = expense.expenses;

		$scope.$broadcast('expense_updated');
	}

	$ionicModal.fromTemplateUrl('app_modules/tracker/partials/addExpense.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.addExpenseModal = modal;
	});
});