angular.module('login').constant('loginErrorCodes',{
	'AUTH_FAILED': {
		template: '<div align="center"><i class="icon ion-sad-outline err-emoticon"></i><br/>Please check your credentials.</div>',
		title: '<span class="assertive">Authentication Failed</span>',
		buttons: [{ 
			text: 'Try Again',
			type: 'button-calm'
		}]
	},
	'AUTH_NOACC': {
		template: '<div align="center"><i class="icon ion-sad-outline err-emoticon"></i><br/>It seems that you are yet to open an account.</div>',
		title: '<span class="assertive">Authentication Failed</span>',
		buttons: [{ 
			text: 'Try Again',
			type: 'button-calm'
		},
		{
		    text: 'Create Account',
		    type: 'button-balanced',
		    onTap: function(e) {
		    	return true;
		    }
		}]
	}
})