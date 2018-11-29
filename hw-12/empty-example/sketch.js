let balls = [];
let pieces = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

for (let i= 0; i < 100; i++) {
  balls.push (new Ball());
 }
}

function draw(){
  background('rgb(255, 168, 28)');
  frameRate(30);

  for ( i = 0; i < balls.length; i++){
    let beginX= random(0, windowWidth);
    let beginY= random(windowHeight, 0);
    balls[i].frame(beginX, beginY);
    balls[i].ballCheck(balls, i);
  //balls[i].move();
  balls[i].display();

stroke(30);
  line(0, 0, 1600, 850);
  line(1600, 850, 900, 1600);

  }
}

class Ball{

constructor(){
  //this.glitterColor= '( random(255), random(255), random(255))';
  this.x = random (0, windowWidth);
  this.y = random (windowHeight, 0);
  this.widthSize = 75;
  this.heightSize = 75;
  this.rad = this.widthSize/2;
}

frame(){
  this.balls();
  this.repeat();
  this.display();

}

//movement
balls(){
  this.x -= 0.10;
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
  //fill( random(255), random(255), random(255));
  fill('rgb(238, 21, 21)');
  ellipse(this.x, this.y, this.widthSize, this.heightSize);
}

ballCheck(otherBalls, myId) {
      // for loop touches each of the balls in the array
      for (let n = 0; n < otherBalls.length; n++) {
          // if n != myId, then check for touching
          // otherwise, its ME and we need to skip
          if (n != myId) {
              let d = dist(this.x, this.y, otherBalls[n].x, otherBalls[n].y);
              let combinedR = this.rad + otherBalls[n].rad;

              if (d <= combinedR) {
                this.x *= -1;
                  this.y *= -1;
                }


              }
          }
      }
  }
