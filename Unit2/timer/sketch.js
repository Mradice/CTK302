let state = 0;
let timer = 0;
let i1, i2, i3 ;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/cats.jpg") ;
  i2 = loadImage("assets/idk.jpg") ;
  i3 = loadImage("assets/skull.jpg") ;
  imageMode (CENTER);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
    fill("black");
      text("Couldnt think of any great ideas so \n here are some random things ive made digitally!", 5, 22) ;

      image(i1, width/2, height/2 - 0, 200, 300) ;
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      fill("black");
      text("Bunny taking a break under the shade!", 5, 22);
      image(i2, width/2, height/2 - 0, 250, 350) ;
      timer++;
      if (timer > 7 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      fill("black");
      text("Assignment from Steves class, decided to make an odd still life.", 5, 22);
      image(i3, width/2, height/2 - 20, 325, 220) ;
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
}
