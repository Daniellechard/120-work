Fireflies a;




function setup() {
  createCanvas(windowWidth, windowHeight);
  a = new Fireflies();
}

function draw(){
background(150)
a.display();
//a.fly();



}

class Fireflies {
  fly x;
  fly y;

Fireflies(){
  x = width/2;
  y = height;
}

function display() {
  fill(255);
  stroke(0);
  ellipse(x, y, 20, 50);

}


}
