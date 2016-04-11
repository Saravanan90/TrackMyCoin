angular.module('shared').constant('AppConfig', {
    'locale' : {
        'default' : 'en',
        'fallback' : 'en',
        'staticFiles' :{
            prefix: '/app_modules/shared/locales/locale-',
            suffix: '.json'
        },
        'langList' : {
            'en' : 'English',
            'jp' : 'Japanese'
        }
    }
});