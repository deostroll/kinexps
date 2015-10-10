$(function(){
	// var c = document.getElementById('canvas');
	
	var stage = new Kinetic.Stage({
		container: 'mycanvas',
		width: 300,
		height: 300
	});
	var layer = new Kinetic.Layer();
	var circleSize = 50;

	var c1 = new Kinetic.Circle({
		radius: circleSize/2,
		x: circleSize /2,
		y: circleSize /2,
		fill: 'red'
	});

	var line = new Kinetic.Line({
		x: 0, y : 0,
		points: [0,0 , circleSize/ 2, circleSize/2],
		stroke: 'black'
	});

	var text = new Kinetic.Text({
		x: circleSize/2,
		y: circleSize/2,
		align: 'center',
		text: '31',
		fontSize: 16,
		stroke: 'white'
	});
	console.log(text);
	layer.add(c1, text);
	stage.add(layer);

})