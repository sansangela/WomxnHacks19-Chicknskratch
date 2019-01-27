var scribble = new Scribble();
//var windowHeight = 400;
//var windowWidth = 1000;
var cnv;
var halfHeight = windowHeight/2;
var originX = windowWidth/15;
var originY = halfHeight;
var pi = 3.1415926;
var img; 
function setup() {
//	createCanvas(windowWidth, windowHeight);
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
	frameRate(20);
	img = loadImage('png/chicken1betterlineweight.png');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
	stroke(0);
	strokeWeight(1);
	// will later get replaced by actual coordinates
	var displacementChickenX=random(-2,2);
	var displacementChickenY=random(-2,2);
	var x = mouseX;
	var y = mouseY;
	var endX = mouseX;
	// create an instance of scribble and set a few parameters
	scribble.bowing    = 0.1;
	scribble.roughness = 3;
	// draws x, y axis
	var lenOfCurve= (endX-originX)/8;
	scribble.scribbleLine(originX, originY, endX, originY );
	scribble.scribbleLine(originX, originY-windowHeight/2, originX, originY);
	scribble.scribbleRect(originX,originY,15,15);
	image(img, mouseX-img.width/(2*7)+displacementChickenX, originY-img.height/(7*2)+displacementChickenY, img.width/7, img.height/7);
	for (let i=1; i<8; i+=4){
		scribble.scribbleCurve(originX+(lenOfCurve*(i-1)), originY, originX+lenOfCurve*i, originY-(2*lenOfCurve/pi), originX+(lenOfCurve*(i-1))+(0.3642*lenOfCurve), originY, originX+(lenOfCurve*(i-1))+lenOfCurve*0.6358, originY-(2*lenOfCurve/pi));
		scribble.scribbleCurve(originX+lenOfCurve*i, originY-(2*lenOfCurve/pi), originX+(lenOfCurve*(i+1)), originY, originX+lenOfCurve*i+(0.3642*lenOfCurve),originY-(2*lenOfCurve/pi),originX+(lenOfCurve*(i+1))-(0.3642*lenOfCurve),originY);
		scribble.scribbleCurve(originX+(lenOfCurve*(i+1)), originY, originX+(lenOfCurve*(i+2)), originY+(2*lenOfCurve/pi), originX+(lenOfCurve*(i+1))+(0.3642*lenOfCurve), originY, originX+(lenOfCurve*(i+2))-(0.3642*lenOfCurve),originY+(2*lenOfCurve/pi));
		scribble.scribbleCurve(originX+(lenOfCurve*(i+2)), originY+(2*lenOfCurve/pi),originX+(lenOfCurve*(i+3)),originY,originX+(lenOfCurve*(i+2))+(0.3642*lenOfCurve),originY+(2*lenOfCurve/pi),originX+(lenOfCurve*(i+3))-(0.3642*lenOfCurve),originY);
	}
	//(0.3642*2*lenOfCurve/pi)
}
