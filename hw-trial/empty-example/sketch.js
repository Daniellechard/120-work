let glitter = [];
let pieces = 75;

function setup() {
  createCanvas(windowWidth, windowHeight);

for (let i= 0, i < pieces; i++) {
  glitter.push (new Confetti());
 }
}

function draw(){
  background(255);
  frameRate(50);

  for ( i = 0; i < glitter.length; i++){
    let beginX= random(0, windowWidth);
    let beginY= random(windowHeight, 0);
    glitter[i].frame(beginX, beginY);
  }
}

class Confetti{

constructor(){
  this.glitterColor= 'rgb( random(255), random(255), random(255))';
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
    this.y = random(windowheight, 0);
    this.x = random(0, windowWidth);
  }
}



//display
display(){
  fill(this.glitterColor);
  ellipse(this.x, this.y, this.widthSize, this.heightSize);
}

//melt effect that didnt take
    melt(){
     if (this.y > height){
        this.y = this.melt_y;
        this.x = this.melt_x;
      }
    }
}
