function mainMenuSetup() {
  img = loadImage('https://raw.githubusercontent.com/MrO-Classes/ics2o-summative-learn-with-us-circle-of-life/master/artwork/GOOD%20LOGO%20CS.png');
}

function mainMenuDraw() {
  background(40, 47, 71);
  image(img, 135, height / 12, img.width / 12, img.height / 12);
  
  //play button
  fill(255,255,255);
  rect(130, 320, 160, 60);
  fill(0,0,0);
  textSize(20);
  text('PLAY', 190, 355);

  // instructions button
   fill(255,255,255);
  rect(220, 250, 150, 50);
   fill(0,0,0);
  text('Instructions', 245, 280);

  // about us button
   fill(255,255,255);
  rect(30, 250, 150, 50);
   fill(0,0,0);
  text('About Us', 65, 280);


}

function mainMenuMouseClicked() {
 if (mouseX >= 220 && mouseX <= 370 &&
      mouseY >= 250 && mouseY <= 300) {
    // go to instructions
    currentScene = 2;
 } else if (mouseX >= 130 && mouseX <= 290 &&
      mouseY >= 320 && mouseY <= 380) {
    // go to game
    currentScene = 3;
 } else if (mouseX >= 30 && mouseX <= 180 &&
      mouseY >= 250 && mouseY <= 300) {
    // go to about us
    currentScene = 4;
 }
}