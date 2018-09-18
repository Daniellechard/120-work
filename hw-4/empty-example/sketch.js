//Danielle Chard
//Monster: Mike Wasowski
function setup() {
  //creating canvas to work on
  createCanvas (800, 800);
}
function draw() {
  //setting background color
  background (200)



//creating sandbox for monster
push();

//centering grid
translate (400, 400);

//creating sandbox for BODY
  push();
//body code ellipse or rounded rectangle
//deleting stroke
  noStroke();
//color of rectangle
  fill('green');
//creating rectangle
  rect(-200, -200, 250, 250, 150, 150, 100, 100);
  //end of body sandbox
  pop();


//creating sandbox for FACE
push();
//eliminating strokes from shapes
noStroke();
//eyes=
ellipse(-80, -100, 120, 120);
//coloring iris green
fill('green');
//iris
ellipse(-80, -100, 50, 50);
//coloring  pupil black
fill('black');
//pupil
ellipse(-80, -100, 20, 20);
//mouth
rect(-130, -30, 100, 60, 0, 0, 0, 0);
// teeth
//coloring teeth white
fill('white');
//rotating tooth left upper edge
triangle(-130, -30, -110, -30, -120, 0);
triangle(-110, -30, -90, -30, -100, 0);
triangle(-90, -30, -70, -30, -80, 0);
triangle(-70, -30, -50, -30, -60, 0);
triangle(-50, -30, -30, -30, -40, 0);
//bottom row of teeth
//scaling to flip teeth
scale(1, -1)
//creating teeth
triangle(-120, -30, -100, -30, -110, 0);
triangle(-100, -30, -80, -30, -90, 0);
triangle(-80, -30, -60, -30, -70, 0);
triangle(-60, -30, -40, -30, -50, 0);
//horns
//right triangle/horn
triangle(-40, 195, -20, 188, -30, 240);
//left triangle/horn
triangle(-130, 188, -110, 195, -117, 240);
pop();


//creating sandbox for ARMS
push();
//reference point middle
//fill('red');
//ellipse(0, 0, 5, 5);
//arms
//coloring arms
stroke('green');
//defining stroke weight
strokeWeight(25);
//creating right arm
line(30, -130, 90, -250);
//creating left arm
line(-170, -110, -240, -250);

//sanbox for HANDS
push();
//hands sanbox
//defining hands color
stroke('rgb(34, 98, 5)');
//defining strokeweight for hands
strokeWeight(55);
//creating right hand
point(90, -250);
//creating left hand
point(-240, -250);
//end of hands sandbox
pop();


//creating sandbox for LEGS and FEET
push();
//legs
//defining leg strokewight
strokeWeight(25);
//defining leg color
stroke('green');
//creating right leg
line(-15, 20, 5, 200);
//creating left leg
line(-145, 20, -165, 200);
//feet
//defining fill color for feet
stroke('rgb(34, 98, 5)');
//creating right foot
triangle(35, 200, 50, 200, 45, 195);
//creating left foot
triangle(-195, 200, -210, 200, -205, 195);
//end of legs sandbox
pop();
//end of monster sandbox
pop();
}
