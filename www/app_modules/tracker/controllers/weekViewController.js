angular.module('tracker').controller('WeekViewController', function($scope, monthFullNames) {
	function updateWeeks() {
		var tracker = $scope.tracker,
			startDate = new Date(tracker.year, tracker.month),
			lastDate = new Date(tracker.year, tracker.month + 1);
			lastDate.setDate(0);

		var today = $scope.default,
			defaultDate = new Date(today.year, today.month, today.day);

		var weekCount = Math.ceil((lastDate.getDate() + startDate.getDay()) / 7);	
		var weeks = [];
			start = 1;
		while(weeks.length < weekCount){
			var start = startDate.getDate(),
				end = Math.min( (start + 6 - startDate.getDay()), lastDate.getDate());
			var obj = {
				icon: weeks.length + 1,
				text: start + ' - ' + end,
				disable: startDate > defaultDate
			}
			weeks.push(obj);
			startDate.setDate(end + 1);
		}
		$scope.weeks = weeks;
	}

	function getWeekExpense(startDate, endDate) {
		var weekExpense = $scope.getWeekExpense(startDate, endDate);
		if(typeof weekExpense == 'string')
			$scope.dataErr = weekExpense;
		else{
			$scope.dataErr = null;
			$scope.chartData = weekExpense.chartData.data;
			$scope.chartLabels = weekExpense.chartData.labels;
			$scope.listdata = weekExpense.details;
			$scope.total = weekExpense.total;
		}
	}

	$scope.months = monthFullNames;
	$scope.refreshWeek = function(index, value) {
		$scope.tracker.week = index;
		var arr = value.text.split('-');
		getWeekExpense(arr[0].trim(), arr[1].trim());
	}
	$scope.$watch(
		function(scope) { return scope.tracker.month },
		function() {
			$scope.tracker.month = +$scope.tracker.month;
			updateWeeks();
		}
	);
});