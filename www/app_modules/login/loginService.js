angular.module('login')
	.factory('LoginService', function(BaseService) {
		return {
			validateUser: function(formData) {
				return BaseService.http({
					url: '/user/authenticate',
					data: formData,
					type: 'POST'
				});
			}
		};
});