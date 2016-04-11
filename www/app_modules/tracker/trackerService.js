angular.module('tracker')
	.factory('TrackerService', function(BaseService) {
		return {
			getExpenses: function() {
				return BaseService.http({
					url: '/expense/fetch',
					type: 'POST',
					data: {
						user: localStorage.getItem('username')
					}
				});
			},
			addExpense: function(expense) {
				return BaseService.http({
					url: '/expense/add',
					type: 'POST',
					data: {
						user: localStorage.getItem('username'),
						expense: expense
					}
				});
			}
		};
});