let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("red");
      for (let j = 0; j < height; j += 25) {
        for (let i = 0; i < width; i += 25) {
          fill("black");
          rect(i, j, 20, 20);
        }
      }
      break;

    case 1:
      background("blue");

      fill("black");
      for (let j = 0; j < height; j = j + 2) {
        for (let i = 0; i < width; i++) {
          ellipse(i * 20, j * 20, 10, 10);
        }
      }
      break;

    case 2:
      background("purple");

      for (let j = 0; j < height; j += 25) {
        for (let i = 0; i < width; i += 25) {
          triangle(i * 5, j * 5, 5, 5, 5, 5);
        }
      }
      break;

    case 3:
       background("purple");

      fill(" #233067");
      for (let j = 0; j < 100; j=j+1) {
        for (let i = 0; i < 100; i=i+2) {
          rect(j * 10, i * 5, 100, 100);
        }
     }
      break;

    case 4:
      background("pink");
 
      fill("purple");
      for (let j = 0; j < height; j = j + 5) {
        for (let i = 0; i < width; i++) {
          ellipse(i * 20, j * 1, 5, 5);
        }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
