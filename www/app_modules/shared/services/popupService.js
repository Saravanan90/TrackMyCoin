angular.module('shared')
	.factory('PopupService', function( $ionicPopup, ErrorMap ) {
		return {
			showError: function( errObj ) {
				return $ionicPopup.show(errObj);
			},
			showSuccess: function( options ) {
				return $ionicPopup.show(options);
			},
			showGenericError: function(errCode) {
				return $ionicPopup.show(ErrorMap[errCode]);
			}
		};
});
