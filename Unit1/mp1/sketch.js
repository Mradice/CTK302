function setup(){
  createCanvas(1000, 600);
  
}



function draw() {
  background(186,218,237);
 // noStroke();


 if (mouseIsPressed) {

  // background

  fill("black") ;
text("This is Dr. Bright, Ever since he was young he hated the moon and swore to destroy it. He hated it because he was afraid of the dark and to him the moon meant darkness. He didnt pay much attention in school so he has no idea that the moon plays an important role to everyone. After being struck by lighting he was gifted powers and now its his time to destroy the moon, and probably Earth too. ", 10, 460, 1000, 1000) ;



  fill(36);
  quad(0, 0, 1000, 0, 1000, 450, 0, 450);
    
  fill(64);
  triangle(219, 85, -58, 360, 378, 370);
  
    fill(181, 181, 181);
  ellipse(552, 90, 72, 72);

  fill(64);
  triangle(45, 68, -58, 360, 190, 270);
  
  fill(61);
  triangle(484, 105, 238, 450, 700, 370);
  
      fill(56);
  triangle(644, 95, 238, 450, 870, 370);
  
    fill(67);
  triangle(584, 105, 238, 450, 780, 370);

    fill(56);
  triangle(844, 80, 578, 450, 1180, 370);
  
  fill(59);
  triangle(794, 115, 238, 450, 1080, 370);

  fill(61);
  triangle(894, 95, 578, 450, 1180, 370);
  
  

// road

  fill(24, 46, 19);
  quad(0, 220, 1000, 220, 1000, 450, 0, 450);
  
  fill(54);
  quad(320, 220, 390, 220, 640, 450, 80, 450);
  
  fill(161, 132, 19);
  quad(345, 310, 355, 310, 360, 400, 340, 400);
  
    fill(161, 132, 19);
  quad(345, 290, 355, 290, 352, 230, 348, 230);

  fill(161, 132, 19);
  quad(330, 450, 370, 450, 360, 440, 340, 440);



    // person
    fill(238, 196, 25);
    quad(560, 290, 585, 290, 620, 350, 520, 355);
  
    fill(86, 89, 85);
    quad(560, 390, 565, 390, 565, 340, 560, 340);
    
    fill(86, 89, 85);
    quad(580, 390, 585, 390, 585, 340, 580, 340);
  
    fill(53, 26, 77);
    quad(560, 290, 585, 290, 585, 340, 560, 340);
  
    fill(238, 196, 25);
    triangle(560, 290, 585, 290, 572.5, 315);
  
    fill(53, 26, 77);
    quad(562, 290, 583, 290, 580, 268, 565, 268);
  
    fill(59, 59, 59);
    ellipse(572.5, 280, 17, 19);
  
    fill(238, 196, 25);
    ellipse(569, 277, 4, 3);
  
    fill(238, 196, 25);
    ellipse(576, 277, 4, 3);
  
    fill(238, 196, 25);
    triangle(565, 268, 580, 268, 572.5, 274);
  
    fill(53, 26, 77);
    quad(560, 290, 525, 255, 525, 260, 560, 295);
  
    fill(53, 26, 77);
    quad(585, 290, 620, 255, 620, 260, 585, 295);

// lightning

    fill(230, 191, 41);
    quad(572.5, 225, 560, 245, 572.5, 265, 585, 245);

    fill(230, 191, 41);
    quad(560, 244, 560, 246, 465, 190, 465, 185);

    fill(230, 191, 41);
    quad(585, 244, 585, 246, 680, 190, 680, 185);

    fill(230, 191, 41);
    quad(585, 90, 585, 110, 680, 190, 680, 185);

    fill(230, 191, 41);
    quad(518, 90, 520, 110, 465, 190, 465, 185);

    fill(230, 191, 41);
    quad(572.5, 225, 572.5, 225, 575, 120, 540, 122);




} 

else {

      // background
    fill(238, 196, 25);
  arc(350, 270, 280, 280, PI, TWO_PI);
    
  fill(86, 89, 95);
  triangle(219, 85, -58, 360, 378, 370);
  
    fill(181, 181, 181);
  ellipse(552, 90, 72, 72);

  fill(86, 89, 85);
  triangle(45, 68, -58, 360, 190, 270);
  
  fill(86, 89, 95);
  triangle(484, 105, 238, 450, 700, 370);
  
      fill(86, 89, 95);
  triangle(644, 95, 238, 450, 870, 370);
  
    fill(86, 89, 85);
  triangle(584, 105, 238, 450, 780, 370);


  fill(86, 89, 95);
  triangle(844, 80, 578, 450, 1180, 370);
  
  fill(86, 89, 85);
  triangle(794, 115, 238, 450, 1080, 370);

  fill(86, 89, 85);
  triangle(894, 95, 578, 450, 1180, 370);

  
  
    // road

  fill(46, 97, 32);
  quad(0, 220, 1000, 220, 1000, 450, 0, 450);
  
  fill(102);
  quad(320, 220, 390, 220, 640, 450, 80, 450);
  
  fill(238, 196, 25);
  quad(345, 310, 355, 310, 360, 400, 340, 400);
  
    fill(238, 196, 25);
  quad(345, 290, 355, 290, 352, 230, 348, 230);

  fill(238, 196, 25);
  quad(330, 450, 370, 450, 360, 440, 340, 440);

  


    // person
  fill(86, 89, 85);
  quad(560, 290, 585, 290, 620, 350, 520, 355);

  fill(86, 89, 85);
  quad(560, 390, 565, 390, 565, 340, 560, 340);
  
  fill(86, 89, 85);
  quad(580, 390, 585, 390, 585, 340, 580, 340);

  fill(53, 26, 77);
  quad(560, 290, 585, 290, 585, 340, 560, 340);

  fill(238, 196, 25);
  triangle(560, 290, 585, 290, 572.5, 315);

  fill(53, 26, 77);
  quad(562, 290, 583, 290, 580, 268, 565, 268);

  fill(59, 59, 59);
  ellipse(572.5, 280, 17, 19);

  fill(230, 230, 230);
  ellipse(569, 277, 4, 3);

  fill(230, 230, 230);
  ellipse(576, 277, 4, 3);

  fill(238, 196, 25);
  triangle(565, 268, 580, 268, 572.5, 274);

  fill(53, 26, 77);
  quad(560, 290, 525, 255, 525, 260, 560, 295);

  fill(53, 26, 77);
  quad(585, 290, 620, 255, 620, 260, 585, 295);

  fill("black") ;
  text("This is Dr. Bright, Ever since he was young he hated the moon and swore to destroy it. He hated it because he was afraid of the dark and to him the moon meant darkness. He didnt pay much attention in school so he has no idea that the moon plays an important role to everyone. After being struck by lighting he was gifted powers and now its his time to destroy the moon, and probably Earth too. ", 10, 460, 1000, 1000) ;
  
}
}



function mouseReleased() {
  print(mouseX + "," + mouseY);
}