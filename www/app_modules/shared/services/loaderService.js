angular.module('shared')
	.factory('LoaderService', function( $ionicLoading ) {
		return {
			show: function() {
				$ionicLoading.show({
					template: '<ion-spinner></ion-spinner><br />Please Wait...'
				});
			},
			hide: function() {
				$ionicLoading.hide();
			}
		};
});
