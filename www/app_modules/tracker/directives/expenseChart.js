angular.module('tracker')
	.directive('expenseChart', function() {
		return{
			controller: function($scope) {
				$scope.labels = $scope.labels;
  				$scope.data = $scope.data;
  				//$scope.type = "HorizontalBar";
			},
			scope: {
				data: '=',
				labels: '='
			},
			templateUrl: 'app_modules/tracker/partials/expenseChart.html'
		}
	});
