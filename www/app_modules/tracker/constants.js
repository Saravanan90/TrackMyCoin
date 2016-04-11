angular.module('tracker').constant('successMap', {
	'ADDEXP_SUCCESS': {
		template: '<div align="center"><i class="icon ion-thumbsup err-emoticon"></i><br/>Your expenses are on track.</div>',
		title: '<span class="balanced">Success</span>',
		buttons: [{ 
			text: 'Ok',
			type: 'button-balanced'
		}]
	}
});
