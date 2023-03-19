function splashScreenSetup() {
  img = loadImage('https://raw.githubusercontent.com/MrO-Classes/ics2o-summative-learn-with-us-circle-of-life/master/artwork/GOOD%20LOGO%20CS.png');
}

function splashScreenDraw() {
  background(23, 53, 79);

  image(img, 115, height / 9, img.width / 9, img.height / 9);

  stroke(9, 23, 46);
  strokeWeight(15);
  rect(118, 330, 180, 50);

  noStroke();
  textSize(25);
  text('START', 165, 363);
}

function splashScreenMouseClicked() {
  if (mouseX >= 118 && mouseX <= 368 &&
      mouseY >= 330 && mouseY <= 380) {
    // go to main menu
    currentScene = 1;
  }
}