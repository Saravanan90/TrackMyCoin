angular.module('tracker')
	.directive('expenseList', function() {
		return{
			controller: function($scope) {
			
			},
			scope: {
				data: '=',
				amount: '='
			},
			templateUrl: 'app_modules/tracker/partials/expenseList.html'
		}
	});
