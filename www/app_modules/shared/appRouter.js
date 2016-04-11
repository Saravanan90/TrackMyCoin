(function() {
	angular.module('shared')
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('index', {
					url: '/index',
					controller: function($state) {
						var username = localStorage.getItem('username'),
							session = localStorage.getItem('session');

						if(username && session)
							$state.go('home.day');
						else
							$state.go('welcome');
					}
				})
				.state('welcome', {
					url: '/welcome',
					cache: false,
					templateUrl: 'app_modules/shared/partials/welcome.html',
					controller: function($scope) {
						$scope.User = {
							isNew: !localStorage.getItem('username')
						}
					}
				})
				.state('loginSuccess', {
					url: '',
					cache: false,
					controller: function($state, $stateParams) {
						localStorage.setItem('username', $stateParams.username);
						localStorage.setItem('session', true);
						$state.go('home.day');
					},
					params: {
						username: null
					}
				})
				.state('logout', {
					url: '',
					cache: false,
					controller: function($state) {
						localStorage.removeItem('session');
						$state.go('welcome');
					}
				})
				.state('home', {
					url: '/mytracker',
					templateUrl: 'app_modules/tracker/partials/home.html',
					resolve: {
						trackerData: function(TrackerService) {
							return TrackerService.getExpenses();
						}
					},
					controller: 'TrackerController'
				})
				.state('home.day', {
					url: '/day',
					cache: false,
					templateUrl: 'app_modules/tracker/partials/day.html',
					controller: 'DayViewController'
				})
				.state('home.week', {
					url: '/week',
					cache: false,
					templateUrl: 'app_modules/tracker/partials/week.html',
					controller: 'WeekViewController'
				})
				.state('home.month', {
					url: '/month',
					cache: false,
					templateUrl: 'app_modules/tracker/partials/month.html',
					controller: 'MonthViewController'
				})
				.state('home.year', {
					url: '/year',
					cache: false,
					templateUrl: 'app_modules/tracker/partials/year.html',
					controller: 'YearViewController'
				})

			$urlRouterProvider.otherwise('/index');
		});
})();