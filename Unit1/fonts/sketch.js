let f1, f2, f3 ;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/BluePrinted.ttf") ;
  f2 = loadFont("assets/KosovoTarget.ttf") ;
  f3 = loadFont("assets/PokemonHollow.ttf") ;
  textAlign(CENTER) ;
}

function draw() {
  background("black") ;
  fill("white") ;
  textFont(f1, 48) ;
  text("Hello there!", width / 2, 100) ;
  textFont(f2, 24) ;
  text("Greatings partner!", width / 2, 200) ;
  textFont(f3, 48) ;
  text("Howdy!", width / 2, 300) ;
}
