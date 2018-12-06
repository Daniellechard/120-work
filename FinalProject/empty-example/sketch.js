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
  fft = new p5.FFT();

}

function draw() {
  background(200);
}
