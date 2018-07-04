var robot = require("robotjs");

// // Speed up the mouse.
robot.setMouseDelay(20);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
var r=100
var len=100*4
var move=500

function getY(x){
	return Math.sqrt(r*r-x*x)
}
for (var i = 0; i < len; i+=0.5)
{
	var statusX=(Math.floor(i/r)%4==3||Math.floor(i/r)%4==2)?-1:1
	var xnum=Math.floor(i/r)
	var x=statusX*(xnum%2>0?(r-i%r):i%r)
	var statusY=(Math.floor(i/r)%4==0||Math.floor(i/r)%4==3)?-1:1
	y = statusY*getY(x)
	robot.moveMouse(move+x, move+y);
}

// robot.typeString("node --version");
// robot.keyTap("enter");