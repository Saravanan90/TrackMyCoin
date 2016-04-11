angular.module('tracker')
	.directive('verticalTabs', function($ionicTabsDelegate, $timeout) {
		return{
			controller: function($scope) {
				var lastSelected;
				function updateActiveTab() {
					$timeout( function() {
						$ionicTabsDelegate.$getByHandle($scope.tabname).select($scope.selectedIndex);
						$timeout( function() {
							var activeTabs = document.querySelectorAll('.tabs-vertical .tab-item-active');
							activeTabs[activeTabs.length - 1].scrollIntoView(false);
						}, 0 );
					}, 0 );
				}
				
				$scope.onTabSelected = function(data) {
					lastSelected = data || lastSelected;
					$scope.onTabSelect(lastSelected);
				}

				$scope.$watch(
					function(scope) { return scope.tabs },
					function() {
						updateActiveTab();
					}
				);
				$scope.$on('expense_updated', function(){
					$scope.onTabSelected(null);
				});
			},
			scope: {
				tabs: '=',
				tabname: '@',
				selectedIndex: '=',
				maxIndex: '=',
				onTabSelect: '&',
				disableFuture: '=',
				icon: '@',
				class: '@'
			},
			templateUrl: 'app_modules/tracker/partials/verticalTab.html'
		}
	});
