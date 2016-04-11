angular.module('tracker').controller('DayViewController', function($scope, weekNames, monthFullNames) {
	function updateDays() {
		var tracker = $scope.tracker,
			today = $scope.default;
		var start = new Date(tracker.year, tracker.month, tracker.day),
			today = new Date(today.year, today.month, today.day);

		if(start.getMonth() != tracker.month){
			start.setDate(0);
			tracker.day = start.getDate();
		}

		var	dayCount = start.getDayCount();

		start.setDate(1);
		var days = [];
		while(days.length < dayCount){
			var obj = {
				icon: start.getDate(),
				text: weekNames[start.getDay()],
				disable: start > today
			}
			days.push(obj);
			start.setDate(start.getDate() + 1);
		}
		$scope.days = days;
	}

	function getDayExpense() {
		var dayExpense = $scope.getDayExpense();
		if(typeof dayExpense == 'string')
			$scope.dataErr = dayExpense;
		else{
			$scope.dataErr = null;
			$scope.chartData = dayExpense.chartData.data;
			$scope.chartLabels = dayExpense.chartData.labels;
			$scope.listdata = dayExpense.details;
			$scope.total = dayExpense.total;
		}
	}

	$scope.refreshDay = function(value) {
		$scope.tracker.day = value.icon;
		getDayExpense();
	}
	$scope.months = monthFullNames;
	$scope.$watch(
		function(scope) { return scope.tracker.month },
		function() {
			$scope.tracker.month = +$scope.tracker.month;
			updateDays();
		}
	);
});