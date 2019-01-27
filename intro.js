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
//	myCanvas.parent("shake");
	stroke(0);
	fill(0);
	points = font.textToPoints('"move left hand to change amplitude, right hand for pitch"', 0, 0, 10, {
    sampleFactor: 5,
    simplifyThreshold: 0
    });
    bounds = font.textBounds('"move left hand to change amplitude, right hand for pitch"', 0, 0, 10);
}

function draw() {
	background(255);
	stroke(0);
	let margin = 10;
	beginShape();
	translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
	for (let i = 0; i < points.length; i++) {
		let p = points[i];
		vertex(
			p.x * width / bounds.w +
			sin(20 * p.y / bounds.h + millis() / 1000) * width / 30,
			p.y * height / bounds.h
			);
	}
	endShape(CLOSE);
}
