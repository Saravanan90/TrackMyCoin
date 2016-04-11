angular.module('register').constant('registerErrorCodes',{
	'AUTH_FAILED': {
		template: '<div align="center"><i class="icon ion-sad-outline err-emoticon"></i><br/>Please check your credentials.</div>',
		title: '<span class="assertive">Authentication Failed</span>',
		buttons: [{ 
			text: 'Try Again',
			type: 'button-calm'
		}]
	}
})