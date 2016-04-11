(function() {
	angular.module('shared')
		.directive('appLogo', function() {
			return{
				link: function(scope,element) {
					var ctx = element.children()[0].getContext("2d");

					ctx.beginPath();
					ctx.arc(20,20,20,0,2*Math.PI);
					ctx.fillStyle = 'transparent';
					ctx.fill();

					ctx.font = "50px Verdana";
					// Create gradient
					var gradient = ctx.createLinearGradient(0, 0, 0, 50);
					gradient.addColorStop("0", "green");
					gradient.addColorStop("0.45", "yellow");
					gradient.addColorStop("1.0", "red");
					// Fill with gradient
					ctx.fillStyle = gradient;
					ctx.fillText("t", 10, 37);
				},
				template: '<canvas width="40" height="40" style="margin-top: -3px;"></canvas>'
			}
		});
})();