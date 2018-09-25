//Danielle Chard
//Animation
function setup(){
  //creating canvas to draw on
  createCanvas (1000, 500);
}

function draw() {
  //setting background color
  background ('rgb(119, 212, 241)');


//centering grid
translate (500, 250);
//creating sandbox for clouds
push();
//creating clouds
//eliminating stroke
noStroke();
//determing fill color
fill('white')
//creating right cloud
ellipse (150, -155, 50, 50);
ellipse (185, -160, 75, 75);
ellipse (230, -170, 110, 100);
ellipse (280, -165, 80, 80);

//creating left cloud
ellipse (-200, -125, 50, 50);
ellipse (-235, -130, 75, 75);
ellipse (-280, -140, 110, 100);
ellipse (-330, -135, 80, 80);
//end of clouds sandbox
pop();

//creating sandbox for flower
push();
//stem
//defining stem color
stroke('rgb(41, 142, 73)');
//defining stem width
strokeWeight(10);
//creating stem
line(0, 250, 0, 100)

//flower petals
//defining color layer 1
noStroke();
fill('rgb(223, 13, 13)');
ellipse(0, 100, 95, 95);
fill('rgb(255, 148, 0)');
ellipse(0, 100, 80, 80);
fill('rgb(255, 240, 0)');
ellipse(0, 100, 65, 65);
fill('rgb(25, 204, 0)');
ellipse(0, 100, 50, 50);
fill('rgb(0, 58, 255)');
ellipse(0, 100, 35, 35);
fill('rgb(116, 45, 249)');
ellipse(0, 100, 20, 20);
fill('rgb(83, 0, 163)');
ellipse(0, 100, 10, 10);
//leaves
//specifying leaf color
//noStroke();
fill('rgb(41, 142, 73)')
rect(0, 200, 25, 20, 120, 0, 100, 130);
rect(-25, 165, 25, 20, 0, 100, 130, 100);



}
