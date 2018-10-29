//creating array
var words = ["Think", "left", "and", "think", "right", "and", "think", "low", "and", "think",
 "high", "Oh", "the", "things", "you", "can", "think", "up", "if", "only", "you", "try", "Dr. Seuss"];

var pos = {
  x: 600,
  y: 600
};
//setting index equal to zero
var index=0;
//setting up canvas
function setup() {
  createCanvas(windowWidth, windowHeight);

  }


//setting up draw and background
function draw(){
background(235);

//creating text
fill(0);
textSize(50);
text(words[index], pos.x, pos.y);}

//changing text with each mouse clickS
function mousePressed() {
  index = index + 1;

if (index == 23){
  index=0;
}
}
