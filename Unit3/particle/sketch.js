let cars = [];
let i1 ;

function setup() {
  createCanvas(600, 600);
  il = loadImage("assets/howdy.jpg");

}

function draw() {
   background("black");
  // image(i1, width/2, height/2);


   cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    
    if (cars[i].opacity < 0) {
      cars.splice(i, 1);
    }
  }

  fill("black");
 // text(cars.length, 40, 40) ;
}

class Car {
  constructor() {
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(-.3, .3), random(-10, -3));
    this.r = random(255) ;
    this.g = random(255) ;
    this.b = random(255) ;
    this.opacity = random(255) ;
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.opacity) ;
    ellipse(this.pos.x, this.pos.y, 20, 20);
    // text("Howdy", this.pos.x, this.pos.y, 20, 20);
  }

  move() {
    this.pos.add(this.vel) ;
    this.opacity -= 3 ;
  }
}
