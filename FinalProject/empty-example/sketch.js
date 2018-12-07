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
  background(200);
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

text(bass, 10, 10,20,20);
text(lowMid, 10, 20, 20, 20);
text(mid, 10, 30, 20, 20);
text(highMid, 10, 40, 20, 20);
text(treble, 10, 50, 20, 20);

  pop();

//mapping frequencies
//first two numbers are the frequencies we are getting, second two are the values visuals need to be mapped to
//dont forget to change second set
  bass = map(bass, 0, 245, 0, 255);
  lowMid = map(lowMid, 0, 210, 0, 255);
  mid = map(mid, 0, 200, 0, 255);
  highMid = map(highMid, 0, 140, 0, 255);
  treble = map(treble, 0, 145, 0, 255);

//circle
  push();

  ellipse(800, 400, bass, bass) //drums
  ellipse(300, 100, lowMid, lowMid); //voice?
  //ellipse(300, 600, mid, mid);
  ellipse(1000, 100, highMid, highMid);
  ellipse(1000, 600, treble, treble)
  pop();

//line
push();
strokeWeight(mid/2);
line(800, mid, mid, mid );

pop();
}
