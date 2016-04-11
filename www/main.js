(function(){
	var mainApp = angular.module('trackMyCoin', ['ionic', 'ui.router', 'pascalprecht.translate', 'chart.js', 'shared', 'register', 'login', 'tracker']);
	mainApp.config(function ($locationProvider) {
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
    mainApp.config(function ($translateProvider, AppConfig) {
        $translateProvider.useStaticFilesLoader(AppConfig.locale.staticFiles);
        $translateProvider.preferredLanguage(AppConfig.locale.default);
        $translateProvider.fallbackLanguage(AppConfig.locale.default);
	});
    mainApp.config(function(ChartJsProvider) {
        ChartJsProvider.setOptions({
            responsive: true,
            maintainAspectRatio: true
        });
    });
})();