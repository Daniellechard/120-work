let glitter = [];
let pieces = 75;

function setup() {
  createCanvas(windowWidth, windowHeight);

for (let i= 0; i < 75; i++) {
  glitter.push (new Confetti());
 }
}

function draw(){
  background(255);
  frameRate(30);

  for ( i = 0; i < glitter.length; i++){
    let beginX= random(0, windowWidth);
    let beginY= random(windowHeight, 0);
    glitter[i].frame(beginX, beginY);
  }
}

class Confetti{

constructor(){
  //this.glitterColor= '( random(255), random(255), random(255))';
  this.x = random (0, windowWidth);
  this.y = random (windowHeight, 0);
  this.widthSize = 10;
  this.heightSize = 10;

}

frame(){
  this.glitter();
  this.repeat();
  this.display();

}

//movement
glitter(){
  this.x -= 0.1;
  this.y += random (1, 5);
}

repeat(){

  if( this.y > height){
    this.y = random(windowHeight, 0);
    this.x = random(0, windowWidth);
  }
}



//display
display(){
  noStroke();
  fill( random(255), random(255), random(255));
  ellipse(this.x, this.y, this.widthSize, this.heightSize);
}
}
