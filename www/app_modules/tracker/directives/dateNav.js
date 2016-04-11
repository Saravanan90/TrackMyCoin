angular.module('tracker')
	.directive('dateNav', function() {
		return{
			controller: function($scope) {
				$scope.Date = {};
				$scope.onMonthChange = function() {
					$scope.tracker.month = + $scope.Date.month;
				}
			},
			scope: {
				tracker: '=',
				date: '@',
				maxMonth: '@',
				months: '=',
				ismonth: '@'
			},
			templateUrl: 'app_modules/tracker/partials/dateNav.html'
		}
	});
