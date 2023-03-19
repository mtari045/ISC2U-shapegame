function instructionsSetup() {
}

function instructionsDraw() {
  background(222, 87, 215);
  fill(0,0,0);
  strokeWeight(90);
  textSize(40);
  text("HOW TO PLAY", 62,50);
  fill(255,255,255);
  text("HOW TO PLAY", 65,49);
  
 fill(0,0,0);
  textSize(20);
  text("Use the mouse to click on the shapes that" , 10,100);
  text("apply to the descriptive word at the top of",10,120);
  text("the screen.",10,140);
  
  textSize(20);
  text("If you miss a shape or click", 10,175);
  text("the wrong one, answer a question right to", 10,195);
  text("keep going!", 10, 215);
  
  
  
  text("You won three rounds? ", 10, 270);
  text("You get to play a fun mini game!",10,290);
  
  
  
  fill(255);
  rect (10, 350,  70, 30);
  fill(0);
  text("BACK", 20, 370);
}

function instructionsMouseClicked() {
  if(mouseX >= 10 && mouseX <= 80 &&
      mouseY >= 350 && mouseY <= 370) {
    // go to main menu
    currentScene = 1;
  }
}