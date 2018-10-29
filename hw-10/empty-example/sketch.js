//creating array
var words = ["Think", "left", "and", "think", "right", "and", "think", "low", "and", "think",
 "high", "Oh", "the", "things", "you", "can", "think", "up", "if", "only", "you", "try", "Dr. Seuss"];

//setting index equal to zero
var index=0;
//creating variables for x and y positions
var pos = {
  x: 600,
  y: 600
};
//
var color = {
  r: 0,
  b: 255,
  g: 0
}
//setting up canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
//slowing frame rate
frameRate(1);
  }


//setting up draw and background
function draw(){
background(color.r, color.b, color.g);
//adding random background color
color.r = random(100, 200);
color.b = random(100, 255);
color.g = random(200, 255);
//adding random word positions for x and y
pos.x = random(200, 1000);
pos.y = random(200, 600);

//add text instructions
fill(0);
textSize(20);
text('press mouse to read through poem', 600, 700);


//creating text
fill(0);
textSize(100);
text(words[index], pos.x, pos.y);}

//changing text with each mouse click and reseting it once it reaches the last word
function mousePressed() {
  index = index + 1;

if (index == 23){
  index=0;
}
}
