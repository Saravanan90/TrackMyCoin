angular.module('register').controller('RegisterController', ['$scope', 'RegisterService', function($scope, RegisterService) {
	$scope.createAccount = function() {
		RegisterService.registerUser($scope.user).then(
			function success(response) {

			}, function error(response) {

			}
		);
	}
}]);