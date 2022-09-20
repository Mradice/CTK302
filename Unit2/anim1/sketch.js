let x = 0 ;
let f1 ;


function setup() {
  createCanvas(1000, 500);
  f1 = loadFont("assets/BluePrinted.ttf");
}

function draw() {
  background(59, 59, 89);
  textSize(70);
  textFont(f1);
  text("Unit 2 Rules!", x, 100);
  x = x + 10 ;

if (x > width) {
    x = -600;
}
}
