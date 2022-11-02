let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let ship, ball2, ball3, bg1, bgwin, bglost, bgplay, f1 ;



function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn objects
  // # of cars going across the screen

  ship = loadImage("assets/mp3_ufo.png") ;
  ball2 = loadImage("assets/mp3_cow.png") ;
  ball3 = loadImage("assets/mp3_pig.png") ;
  bg1 = loadImage("assets/mp3_bg1.png") ;
  bgwin = loadImage("assets/mp3_win.png") ;
  bglost = loadImage("assets/mp3_lost.png") ;
  bgplay = loadImage("assets/mp3_play.png") ;
  f1 = loadFont("assets/race.ttf") ;


  for (let i = 0; i < 10; i++) {
    cars.push(new Car());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (state) {
    case 0: //menu
      image(bg1, width/2, height/2);
      fill("white");
      textFont(f1, 50) ;
      text("click to start", width / 4.5, height / 2);
      // text("click to start", width / 2, height / 2);
      break;

    case 1:
      game();
      timer++;
      //timer for the game
      if (timer > 22 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: //menu
     // background(100);
     image(bgwin, width/2, height/2); 
     fill("white");
     textFont(f1, 50) ;
      text("You won!", width / 3, height / 2);
      textFont(f1, 20) ;
      text("click to replay", width / 2.7, 650);
      break;

    case 3: //menu
     // background(100);
     image(bglost, width/2, height/2);
      fill("white");
      textFont(f1, 50) ;
      text("You lost!", width / 3.1, height / 2);
      textFont(f1, 20) ;
      text("click to replay", width / 2.7, 650);
      break;
  }
}

function resetTheGame() {
  cars = [];


  for (let i = 0; i < 10; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function mouseReleased() {
  switch (state) {
    case 0: // menu screen
      state = 1;
      break;

    case 2: // win screen
      resetTheGame();
      state = 0;
      break;

    case 3: // loose screen
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  image(bgplay, width/2, height/2);

  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 30) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  // add a "frog"
//  fill("black");
//   ellipse(frogPos.x, frogPos.y, 50, 50);
   image(ship, frogPos.x, frogPos.y, 150, 150);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  
//   if (frogPos.x > width) frogPos.x = width ;
  
//  if (frogPos.y > height) frogPos.y = height ;
}

class Car {
  // constructor and attributes
  constructor() {
    // this.pos = createVector(random(0, 1000), 150); // initialize your attributes here
    this.pos = createVector(random(0, 1080),random (0, 1920)); // initialize your attributes here
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128);


    if (random(2)>1) {
    this.img = ball2 ;
    }else{
      this.img = ball3 ;
    }

  }
  // methods

  display() {
    // this can be text, images, or shapes
    // fill(this.r, this.g, this.b, this.o);
    // rect(this.pos.x, this.pos.y, this.size, 25);
    image(this.img, this.pos.x, this.pos.y, 70, 70);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
