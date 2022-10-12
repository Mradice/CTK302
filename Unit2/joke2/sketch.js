let state = 0;
let timer = 0;
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
textFont(f3,25);
fill("white");
text ("why do cows wear bells?", width / 2, height / 2,);
break;

case 1:
background("blue");
textFont(f3,25);
fill("white");
text ("because their horns dont work.", width / 2, height / 2);
break;
  }

  timer++ ;
  if(timer > 4 * 60) {
      timer = 0;
      state++ ;
        if (state > 1) {
          state = 0;
        }
  }

}

