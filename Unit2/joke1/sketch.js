let state = 0;
let f1, f2, f3 ;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/BluePrinted.ttf") ;
  f2 = loadFont("assets/KosovoTarget.ttf") ;
  f3 = loadFont("assets/PokemonHollow.ttf") ;
  textAlign(CENTER) ;
}

function draw() {
switch (state) {
case 0:
background("red");
fill ("white");
textFont(f3, 28);
text ("I tried to catch fog yesterday...", width / 2, height / 2,);
break;

case 1:
background("blue");

fill ("white");
textFont(f3, 48);
text ("Mist", width / 2, height / 2);
break;
  }
}

function mouseReleased() {
state++ ;
  if (state > 1) state = 0;
}