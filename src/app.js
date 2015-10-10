angular.module('myapp', [])
	.controller('MyCtrl', function(kinetic){
		var canvas = $('#mycanvas')[0];
		var stage = new kinetic.Stage({
			container: canvas,
			width:300,
			height: 300
		});

		var rect = new kinetic.Rect({
			height:300,
			width: 300,
			fill: 'red'
		});

		stage.add(rect);
	})
	.value('kinetic', Kinetic);
