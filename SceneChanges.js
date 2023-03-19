var currentScene = 0;
// 0 --> splash screen
// 1 --> main menu
// 2 --> instructions
// 3 --> game
// 4 --> about us

function setup() {
  // everybody needs a canvas
  createCanvas(canvasSize, canvasSize);

  // scene specific setups
  splashScreenSetup();
  mainMenuSetup();
  instructionsSetup();
  gameSetup();
  aboutUsSetup();
}

function draw() {
  if (currentScene == 0) {
    splashScreenDraw();
  } else if (currentScene == 1) {
    mainMenuDraw();
  } else if (currentScene == 2) {
    instructionsDraw();
  } else if (currentScene == 3) {
    gameDraw();
  } else if (currentScene == 4) {
    aboutUsDraw();
  }
}

function mouseClicked() {
  if (currentScene == 0) {
    splashScreenMouseClicked();
  } else if (currentScene == 1) {
    mainMenuMouseClicked();
  } else if (currentScene == 2) {
    instructionsMouseClicked();
  } else if (currentScene == 3) {
    gameMouseClicked();
  } else if (currentScene == 4) {
    aboutUsMouseClicked();
  }
}