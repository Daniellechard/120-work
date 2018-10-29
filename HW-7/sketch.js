

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}



function draw() {


    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
//added text instructions
    text('press any key to reset', 550, 50);
    text('click left or right mouse buttons to change stroke weight', 800, 50)
 //added reset option
  if (keyIsPressed === true) {
     background(255);
    }
//added if/else statement to change strokeWeight
if (mouseIsPressed){
  if (mouseButton === RIGHT)  {
  strokeWeight(3);
} else {
 strokeWeight(0);
}
}
  //changed code to pink, yellow, white, and orange tones using the random and fill function together
    fill( 255, random(255), random(255), random(255));
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);

}
