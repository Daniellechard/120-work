function  setup(){
  //creating canvas
  createCanvas(windowWidth, windowHeight)
}
let posX=0
let posY=0
//creating let functions for circle width and height
let circleW=60
let circleH=60
//creating let function for increase
let increase=100
//setting up draw function
function draw() {
  //setting background color
  background('rgb(50, 232, 213)')

  //creating sandbox for circle row 1
    push();
    //scaling circle width and height by 1.02
    scale(circleW)
    circleW*=1.02
    scale(circleH)
    circleH*=1.02
    //adjusting strokeweight
    strokeWeight(10)
    //defining stroke color
    stroke('rgb(249, 177, 227)')
    //creating for loop for 1st row of circles
    for( let i=0; i<50; i++){
    posX= 150*i/2+5
    //defining fill color
    fill( 255, 140, random(255) );
    //fill('rgb(42, 249, 193)')
    //creating circles
    ellipse(posX, posY, circleW, circleH)}

    posY++;
    if (posY>height){
      posY=0
    }
    //ending sandbox circle row 1
    pop();




}
