let bugs = [];
let x;
let y;
let size;
let num_of_bugs = 30;

function setup() {
    createCanvas(windowWidth, windowHeight);

    bugs = new Firefly (random(windowWidth), random(windowHeight), 30);

    for (let i = 0; i < num_of_circles; i++ ) {
        bugs[i] = new Firefly(random(windowWidth), random(windowHeight), 30);
      }
    }

function draw () {
  background(0);
  for( i = 0; i < num_of_bugs; i++ ){
    bugs[i].frame();
  }
  }

class Firefly {
  constructor( x, y, size) {
    this.shade = 255;
    this.size = size;
    this.rad = this.size / 4;
    this.posX = random(width);
    this.posY = random(height);
    this.deltaX = random(-4, 4);
    this.deltaY = random(-4, 4);

  }
  frame(){
    this.display();
    this.move();
    this.edgeCheck();
  }
  display() {
    push();
    noStroke();
    fill(this.shade);
    translate( this.posX, this.posY );
    ellipse( 0, 0, this.size );
    pop();
  }
  move() {
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }
  edgeCheck() {
    if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
      this.deltaX *= -1;
    }
    if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
      this.deltaY *= -1;
    }
  }
}
