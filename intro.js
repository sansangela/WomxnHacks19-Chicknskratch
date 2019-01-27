var scribble = new Scribble();
var windowHeight = window.innerHeight*0.6;
var windowWidth = window.innerWidth*2/3;

let points;
let bounds;
let font;

function preload() {
  font = loadFont('avenir.otf');
}

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent("shake");
	stroke(0);
	fill(0);
	points = font.textToPoints('"move left hand to change amplitude, right hand for pitch"', 0, 0, 10, {
    sampleFactor: 5,
    simplifyThreshold: 0
    });
}

function draw() {
	background(255);
	stroke(0);
	let margin = 10;
	for (var i = 0; i < points.length; i++) {
		var pt = points[i];
		scribble.scribbleEllipse( pt.x, pt.y, 5, 5 );
  }
}
