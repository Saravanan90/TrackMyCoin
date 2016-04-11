angular.module('login').controller('LoginController', function($scope, $rootScope, $state, loginErrorCodes, LoginService, PopupService) {
	$scope.user = {
		username: localStorage.getItem('username')
	};
	$scope.loginUser = function() {
		LoginService.validateUser($scope.user).then(
			function success(response) {
				var result = response.data;
				if(!(result.dbErr || result.errCode))
					$state.go('loginSuccess',{username: $scope.user.username});
				else if(result.errCode){
					var errPopup = PopupService.showError(loginErrorCodes[result.errCode]);
					errPopup.then(function(value){
						if(value)
							$scope.User.isNew = true;
					})
				}
			}, function error(response) {

			}
		);
	}
});