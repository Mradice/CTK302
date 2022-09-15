let jazz ;

function preload() {
jazz = loadSound("assets/hipjazz.mp3") ;
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  jazz.play() ;
}

function draw() {
  background("black") ;
  fill("white") ;
  text("The name of this song is Hipjazz \n I chose it because its quite hip!", 10, 10, 400, 400) ;

}

function mouseReleased() {
  if (jazz.isPlaying()){
      jazz.pause() ;
  } else {
      jazz.play() ;
  }
}


function touchStarted() {
  getAudioContext().resume();
}
