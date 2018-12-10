//var song = "\Users\Danielle Chard\Desktop\MART 120-Creative Coding\120-work\Final Project"
//"Gasoline.mp3"

//
// function preload() {
//  mySound = loadSound('assets/doorbell.mp3');
// }
let mySong;
let fft;

function preload(){
  mySong = loadSound('./Gasoline.mp3');
}

function setup() {
  mySong.play();
  //stores song's FFT data
  fft = new p5.FFT();
    createCanvas(windowWidth, windowHeight);
//slowing frame rate
frameRate(10);
}

function draw() {
  background('rgb(54, 27, 38)');
  //analyzes frequencies and pulls them from data
  fft.analyze();



//creating variables for frequencies and finding different frequency ranges
  var bass = fft.getEnergy("bass");
  var lowMid = fft.getEnergy("lowMid");
  var mid = fft.getEnergy("mid");
  var highMid = fft.getEnergy("highMid");
  var treble = fft.getEnergy("treble");

//creating text to be able to see frequencies as song plays
  push();

//text(bass, 10, 10,20,20);
//text(lowMid, 10, 20, 20, 20);
//text(mid, 10, 30, 20, 20);
//text(highMid, 10, 40, 20, 20);
//text(treble, 10, 50, 20, 20);

  pop();

//mapping frequencies
//first two numbers are the frequencies we are getting, second two are the values visuals need to be mapped to
//dont forget to change second set
  bass = map(bass, 0, 245, 0, 255);
  lowMid = map(lowMid, 0, 210, 0, 255);
  mid = map(mid, 0, 200, 0, 255);
  highMid = map(highMid, 0, 140, 0, 255);
  treble = map(treble, 0, 145, 0, 255);

  pop();



//circle
  push();
  strokeWeight(5);
  stroke('rgb(252, 194, 219)');
  fill('rgb(90, 237, 210)');
  ellipse(800, 400, bass*1.4, bass*1.4) //drums
  fill('rgb(167, 99, 130)')
  noStroke();
  ellipse(800, 400, bass*1.2, bass*1.2);
  fill('rgb(21, 94, 101)')
  ellipse(800, 400, bass,bass)
  //ellipse(300, 100, lowMid, lowMid); //voice?
  //ellipse(300, 600, mid, mid);
  //ellipse(1000, 100, highMid, highMid);
  //ellipse(1000, 600, treble, treble)
  pop();

  //triangle
  push();
  strokeWeight(5);
  //stroke('rgb(54, 36, 44)');
  stroke('rgb(90, 237, 210)');
  fill('rgb(167, 99, 130)')
    triangle(500, 800, 900, treble, treble, 900);

  pop();
//line
push();
stroke('rgb(21, 94, 101)')
strokeWeight(mid/8);
line(800, mid, mid, mid);
stroke('rgb(252, 194, 219)');
line(800, mid*2, mid*2, mid*2)
pop();

//arc
push();
strokeWeight(15);
stroke('rgb(90, 237, 210)')
fill('rgb(252, 194, 219)')
arc(950, 550, highMid, highMid, highMid/10, HALF_PI);

pop();

//quad
strokeWeight(5);
stroke('rgb(90, 237, 210)')
//noStroke();

fill('rgb(21, 94, 101)')
quad(1000, 100, 1100, 0, 1200, 200, 1000, lowMid*2);
fill('rgb(252, 194, 219)')
quad(1000, 100, 1100, 0, 1200, 200, 1000, lowMid)


}
