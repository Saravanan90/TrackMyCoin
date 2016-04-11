angular.module('tracker').controller('MonthViewController', function($scope, monthNames, monthFullNames) {
	$scope.months = monthNames;
	$scope.monthNames = monthFullNames;
	$scope.refreshMonth = function(index) {
		$scope.tracker.month = index;
		getMonthExpense();
	}

	function getMonthExpense() {
		var monthExpense = $scope.getMonthExpense();
		if(typeof monthExpense == 'string')
			$scope.dataErr = monthExpense;
		else{
			$scope.dataErr = null;
			$scope.chartData = monthExpense.chartData.data;
			$scope.chartLabels = monthExpense.chartData.labels;
			$scope.listdata = monthExpense.details;
			$scope.total = monthExpense.total;
		}
	}
});