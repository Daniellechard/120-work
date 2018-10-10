//For loops
//setting up canvas
function  setup(){
  //creating canvas
  createCanvas(windowWidth, windowHeight)
}
//creating let functions for 'for loop'
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
  fill('rgb(42, 249, 193)')
  //creating circles
  ellipse(posX, posY, circleW, circleH)}

  posY++;
  if (posY>height){
    posY=0
  }
  //ending sandbox circle row 1
  pop();

//creating sandbox circle row 2
  push();
  //defining strokeweight
  strokeWeight(10)
  //choosing stroke color
  stroke('rgb(249, 177, 227)')
  //creating for loop for 2nd row of circles
  for( let i=0; i<50; i++){
  posX= 150*i/2+5
  //defining fill color
  fill('rgb(42, 249, 193)')
  //creating circle row 2 and increasing position on y axis
  ellipse(posX, posY+increase, circleW, circleH)}

  posY++;
  if (posY>height){
    posY=0
  }
  //ending row 2 circles sandbox
  pop();

//beginning of row 3 circle sandbox
  push();
    //defining strokeweight
  strokeWeight(10)
  //choosing stroke color
  stroke('rgb(249, 177, 227)')
  //creating for loop for row 3 circles
  for( let i=0; i<50; i++){
  posX= 150*i/2+5
  //defining fill color
  fill('rgb(42, 249, 193)')
  //creating circles and increasing position on y axis times 2
  ellipse(posX, posY+increase*2, circleW, circleH)}

  posY++;
  if (posY>height){
    posY=0
  }
  //ending sandbox for row 3 circles
  pop();

//creating sandbox for row 4 circles
  push();
  //defining strokeweight
  strokeWeight(10)
  //choosing stroke color
  stroke('rgb(249, 177, 227)')
  //creating for loop for row 4 circles
  for( let i=0; i<50; i++){
  posX= 150*i/2+5
  //defining fill color
  fill('rgb(42, 249, 193)')
  //creating circles and increasing position on y axis times 3
  ellipse(posX, posY+increase*3, circleW, circleH)}

  posY++;
  if (posY>height){
    posY=0
  }
  //end of row 4 circles sandbox
  pop();

//creating sandbox for row 5 circles
  push();
  //defining strokeweight
  strokeWeight(10)
  //choosing stroke color
  stroke('rgb(249, 177, 227)')
  //creating for loop for row 5 circles
  for( let i=0; i<50; i++){
  posX= 150*i/2+5
  //defining fill color
  fill('rgb(42, 249, 193)')
  //creating circles and increasing position on y axis times 4
  ellipse(posX, posY+increase*4, circleW, circleH)}

  posY++;
  if (posY>height){
    posY=0
  }
  //end of row 5 circle sandbox
  pop();

//creating sanbox for row 6 circles
  push();
  //defining strokeweight
  strokeWeight(10)
  //defingn stroke color
  stroke('rgb(249, 177, 227)')
  //creating for loop for row 6 circles
  for( let i=0; i<50; i++){
  posX= 150*i/2+5
  //defining fill color
  fill('rgb(42, 249, 193)')
  //creating circles and increasing position on y axis times 5
  ellipse(posX, posY+increase*5, circleW, circleH)}

  posY++;
  if (posY>height){
    posY=0
  }
  //end of row 6 sandbox
  pop();

//creating sandbox for row 7 sandbox
  push();
  //defining strokeweight
  strokeWeight(10)
  //defining stroke color
  stroke('rgb(249, 177, 227)')
  //creating for loop for row 7 circles
  for( let i=0; i<50; i++){
  posX= 150*i/2+5
  //defining fill color
  fill('rgb(42, 249, 193)')
  //creating circles and increasing position on y axis times 6
  ellipse(posX, posY+increase*6, circleW, circleH)}

  posY++;
  if (posY>height){
    posY=0
  }
  //end of row 7 circle sandbox
  pop();

}
