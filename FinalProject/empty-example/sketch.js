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
frameRate(3);
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
  bass
}
