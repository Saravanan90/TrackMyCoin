angular.module('shared').constant('ErrorMap',{
	'VALIDATION_FAILED': {
		template: '<div align="center"><i class="icon ion-sad-outline err-emoticon"></i><br/>Please check your inputs.</div>',
		title: '<span class="assertive">Validation Failed</span>',
		buttons: [{ 
			text: 'Try Again',
			type: 'button-calm'
		}]
	},
	'DB_ERR': {
		template: '<div align="center"><i class="icon ion-sad-outline err-emoticon"></i><br/>Something went wrong. Please resume after some time.</div>',
		title: '<span class="assertive"> Failed</span>',
		buttons: [{ 
			text: 'Try Again',
			type: 'button-calm'
		}]
	},
	'DB_ERR_ADD_EXP': {
		template: '<div align="center"><i class="icon ion-sad-outline err-emoticon"></i><br/>Something went wrong. But your expenses are on track. System will be updated shortly.</div>',
		title: '<span class="assertive">In Progress</span>',
		buttons: [{ 
			text: 'Ok',
			type: 'button-calm'
		}]
	}
})