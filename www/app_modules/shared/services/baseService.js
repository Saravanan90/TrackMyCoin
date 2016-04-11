angular.module('shared')
	.factory('BaseService', function( $http, LoaderService, PopupService ) {
		return {
			http: function( req, errCodeMap ) {
				if(! req.preventLoader)
					LoaderService.show();
				var reqObj = {
						url: req.url,
						data: req.data,
						dataType: 'json',
						method: req.type || 'GET',
						timeout: (req.timeout || 10) * 1000
					},
					httpCall = $http( reqObj );

				httpCall.then(
					function success( response ) {
						var result = response.data;
						if(!(result.dbErr || result.errCode))
							return;
						if(errCodeMap)
							PopupService.showError(errCodeMap[result.errCode]);
						else if(result.dbErr.name == 'CastError' || result.dbErr.name == 'ValidationErr')
							PopupService.showGenericError('VALIDATION_FAILED');
					}, function error( response ) {
						
					} 
				).finally(function() {
				    if(! req.preventLoader)
						LoaderService.hide();
				});

				return httpCall;
			}
		};
});
