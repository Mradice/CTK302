let state = 0;
let timer = 0;
let i1, i2, i3 ;

function setup() {
  createCanvas(550, 800);
  i1 = loadImage("assets/pic.jpeg") ;
  i2 = loadImage("assets/pic2.jpeg") ;
  i3 = loadImage("assets/pic3.jpeg") ;
  imageMode (CENTER);
}

function draw() {

  background(200);
  
  switch (state) {

    case 0:
      image(i1, width/2, height/2 - -20, 500, 700) ;
      textSize(20);
      text("Hes sad because no one will dance with him.  :(", 40, 50);
      timer++;
      if (timer > 4 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      image(i2, width/2, height/2 - -20, 500, 700) ;
      text("Click the screen if you'd like to dance with him.", 40, 50);
      break;

    case 2:
   
      image(i3, width/2, height/2 - -20, 500, 700) ;
      text("Yay, time to dance!!", 40, 50);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}