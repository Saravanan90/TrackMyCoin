angular.module('register')
	.factory('RegisterService', ['BaseService', function(BaseService) {
		return {
			checkUserName: function(username) {
				return BaseService.http({
					url: '/user/checkAvailability',
					data: {
						username: username
					},
					preventLoader: true,
					type: 'POST'
				});
			},
			registerUser: function(formData) {
				return BaseService.http({
					url: '/user/create',
					data: formData,
					type: 'POST'
				});
			}
		};
}]);