angular.module('tracker').controller('AddExpenseController', function($scope, TrackerService, successMap, PopupService) {
	$scope.categories = ['Transport', 'Food', 'Entertainment', 'Education'];
	$scope.expense = {};
	$scope.expense.category = $scope.categories[0];

	function clearForm() {
		$scope.expense = {};
		$scope.expense.category = $scope.categories[0];
		$scope.addExpenseForm.$setPristine();
	}

	$scope.openModal = function() {
		$scope.addExpenseModal.show();
	};

	$scope.closeModal = function() {
		$scope.addExpenseModal.hide();
	};

	// Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.addExpenseModal.remove();
	});

	$scope.addExpense = function() {
		var expense = {
				expenses: [$scope.expense]
			},
			tracker = $scope.tracker;
		expense.date = new Date(tracker.year, tracker.month, tracker.day)
		TrackerService.addExpense(expense).then(
			function success(response) {
				var result = response.data;
				if(!result.dbErr){
					PopupService.showSuccess(successMap['ADDEXP_SUCCESS'])
					clearForm();
				}
			},
			function error(response) {
				clearForm();
			}
		).finally(function() {
			$scope.updateExpense(expense);
		});
	}
});