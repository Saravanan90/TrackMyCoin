angular.module('register').constant('registerStatusCodes',{
	'REG_SUCCESS': {
		template: '<div align="center"><i class="icon ion-thumbsup err-emoticon"></i><br/>Your account is opened successfully.<br/>Please login to start tracking.</div>',
		title: '<span class="balanced">Success</span>',
		buttons: [{
		    text: 'Login',
		    type: 'button-balanced',
		    onTap: function(e) {
		    	return true;
		    }
		}]
	}
})