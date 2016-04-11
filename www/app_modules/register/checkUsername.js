angular.module('register').directive('checkUsername', ['$q', 'RegisterService', function($q, RegisterService) {
	return{
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {
			ctrl.$asyncValidators.checkUsername = function(modelValue, viewValue) {

		        var def = $q.defer();

		        RegisterService.checkUserName(modelValue).then(
					function success(response) {
						var user = response.data.user;
						if(user)
							def.reject();
						else
							def.resolve();
					}, function error(response) {
						def.resolve();
					}
				);
		        return def.promise;
		    }
		}
	}
}]);