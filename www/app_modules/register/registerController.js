angular.module('register').controller('RegisterController', function($scope, RegisterService, PopupService, registerStatusCodes) {
	$scope.createAccount = function() {
		RegisterService.registerUser($scope.user).then(
			function success(response) {
				if(!response.data.dbErr)
					var popup = PopupService.showSuccess(registerStatusCodes['REG_SUCCESS']);
					popup.then(function(value){
						if(value)
							$scope.User.isNew = false;
					})
			}, function error(response) {

			}
		);
	}
});