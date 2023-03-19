var xPositions = [];
var yPositions = [];
var fallSpeed = [];

var colorsR = [];
var colorsG = [];
var colorsB = [];

var shapes = ['circle', 'oval', 'square', 'rectangle', 'triangle'];
var shapeSelect = [];

var lookFor = [];
var maxLookForTurns = 10;

var startPositionCount = 45;
var canvasSize = 400;
var maxStartHeight = 300;
var maxSpeed = 4;

var currentTurn = 0;
var foundCorrects=0;
var madeAMistake=false;
var victoryEnd=false;
var maxToFind=4;

var mathPatternQuestions=[];
var mathPatternAnswers=[];
var patternChoices=[];
var currentQuestion=0;

var timeForMiniGame = false;

function gameSetup() {
  for(var posCount =0; posCount<startPositionCount; posCount++) {
    xPositions.push(random(0,canvasSize));
    yPositions.push(random(0,maxStartHeight));
    fallSpeed.push(random(1,maxSpeed));
    
    colorsR.push(random(0,255));                
    colorsG.push(random(0,255));
    colorsB.push(random(0,255));
    
    shapeSelect.push(random(shapes));
  }
  for (var turn=0; turn<maxLookForTurns; turn++) {
    lookFor.push(random(shapes));
   
  }
  fillUpPatterns();
    inp=createInput('');
  inp.style.position='absolute';
  inp.style.left=25;
  inp.style.top=25;
  inp.input(processAnswer);
  inp.hide();
  
  
  submitButton = createButton('Submit');
  submitButton.mousePressed(answerSubmit);
  submitButton.hide();
  
  goBackButton = createButton('Go back to game');
  goBackButton.mousePressed(goBack);
  goBackButton.hide();
  
  restartButton = createButton('RESTART');
  restartButton.mousePressed(restartGame);
  restartButton.hide();
}

function fillUpPatterns() {
  mathPatternQuestions[0]='2, 4, 6, 8, ';
  mathPatternAnswers[0]='10';
  mathPatternQuestions[1]='3, 6, 9, 12, ';
  mathPatternAnswers[1]='15';
  mathPatternQuestions[2]='20, 15, 10, 5, ';
  mathPatternAnswers[2]='0';
  mathPatternQuestions[3]='80, 70, 60, 50, ';
  mathPatternAnswers[3]='40';
  mathPatternQuestions[4]='300, 275, 250, 225, ';
  mathPatternAnswers[4]='200';
  
  patternChoices=[0,1,2,3,4];
}

function gameDraw() {
  
  
  if (victoryEnd) {
    noLoop();
     background(88, 181, 67);
  
  
  textSize (90);
  
   fill(0);
  text("YOU WIN!!!", 0, 200);
  
  fill (225);
  text("YOU WIN!!!", 5, 200);
  
  textSize(20);
  fill(255);
  text("Congrats!!", 50, 50);
  text("Play again!", 240, 345);
  
  
    //play again RIYA
  } else if (timeForMiniGame) {
    doMiniGame();
  } else if (!madeAMistake) {
    drawFallingShapes();
  } else {
    noLoop();
    askAQuestion();
  }
}



function drawFallingShapes() {
    frameRate(15);
    background(1, 18, 18);

    for (var i = 0; i < startPositionCount; i++) {
      noStroke();
      fill(colorsR[i], colorsG[i], colorsB[i]);
      if (shapeSelect[i] == 'circle') {
        ellipse(xPositions[i], yPositions[i], 60, 60);
      } else if (shapeSelect[i] == 'oval') {
        ellipse(xPositions[i], yPositions[i], 30, 50);
      } else if (shapeSelect[i] == 'square') {
        rectMode(CENTER);
        rect(xPositions[i], yPositions[i], 45, 45);
      } else if (shapeSelect[i] == 'rectangle') {
        rectMode(CENTER);
        rect(xPositions[i], yPositions[i], 30, 50);
      } else {
        // triangle
        triangle(xPositions[i], yPositions[i]-30, xPositions[i]-30, yPositions[i]+30, xPositions[i]+30, yPositions[i]+30);
      }
      yPositions[i] += fallSpeed[i];
        
      if(yPositions[i] > 400) {
        yPositions[i]=0;
      }
    }
    fill(255, 255, 255);
    rectMode(CORNER);
    rect(120,15, 150, 50);
    fill(0,0,0);
    text(currentTurn+1+": "+lookFor[currentTurn]+' ('+(maxToFind-foundCorrects)+' to go)',145, 45);
  
  fill(255, 255, 255);
  rect(340, 350, 80, 40);
  fill(0,0,0);
  text("BACK", 345, 375);
  
  
}

function gameMouseClicked() {
  console.log(mouseX + ", " + mouseY)
  if (mouseX >= 340 && mouseX <= 380 &&
      mouseY >= 370 && mouseY <= 430) {
    // go to main menu
    currentScene = 1;
    return;
  }
  
  var iGotIt=false;
  // Look for object on x position at mouseX +/- 25
  for(i=0; i<startPositionCount; i++) {
    if (mouseX-27 <= xPositions[i] && xPositions[i] <= mouseX+27) {
      if (mouseY-27 <= yPositions[i] && yPositions[i] <= mouseY+25) {
        if (shapeSelect[i] == lookFor[currentTurn]) {
          foundCorrects++;
          iGotIt=true;
          if (foundCorrects == maxToFind) {
            currentTurn++;
            if (currentTurn == maxLookForTurns) {
              // successful end of whole game
              setupVictoryEnd();
            } else if(currentTurn == 3 || currentTurn == 6 || currentTurn == 9) {
              timeForMiniGame=true;
              miniGameSetup();
            }
            foundCorrects=0;
          }
          break; // no need to test other positions
        }
      }
    }
  }
  if (!iGotIt) {
    madeAMistake=true;
  }
}

function setupVictoryEnd() {
  victoryEnd=true;  
}

var inp;
var submitButton;
var goBackButton;
var restartButton;

function askAQuestion() {
  
  currentQuestion=random(patternChoices);
  background(239, 245, 59);
  
  fill(240, 150, 48);
  textSize(45);
  text("QUESTION TIME!", 20,60);
  fill(0,0,0);
  text("QUESTION TIME!", 22,63);
  
  textSize(15);
  text("Enter the correct answer to continue playing the game!", 20,90);
  
  
  noStroke();
  fill(255,255,255);
  var pad=rect(25,120,350,250);
  fill(0,0,0);
  text('Complete the sequence:', 40, 150);
  text(mathPatternQuestions[currentQuestion], 40, 200);
 
  inp.value('');
  inp.show();
  submitButton.show();
  
}

function answerSubmit() {
  inp.hide();
  submitButton.hide();
  if(userAnswer == mathPatternAnswers[currentQuestion]) {
    handleSuccess();
  } else {
    showFailure();
  }
}

function goBack(){
  madeAMistake=false;
  foundCorrects=0;
  timeForMiniGame = false;
  goBackButton.hide();
   
}


function restartGame() {
  madeAMistake=false;
  foundCorrects=0;
  timeForMiniGame = false;
  restartButton.hide();
  currentScene = 1;
  loop();
}

function handleSuccess() {
 background(71, 195, 54);

  
  
  
  //correct text
  fill(0,0,0);
  textSize(75);
  text("CORRECT!",0,200);
   
  
   fill(11, 48, 6);
   text("CORRECT", 1,205);
  
  
   fill(31, 82, 24);
   text("CORRECT!", 2,210);
  
  
   fill(46, 115, 37);
   text("CORRECT!", 4,215);
  
  
   fill(72, 156, 61);
   text("CORRECT!", 7,220);
  
  
   fill(104, 209, 90);
   text("CORRECT!", 10,225);
  
 
   fill(255,255,255);
   text("CORRECT!", 13,230);
 

    
  textSize(20);
  text ('You got the answer right!',100,350);
  
  setTimeout(function() {
    // reset the game
    madeAMistake=false;
    foundCorrects=0;
    loop();
  }, 2000);
}

function showFailure() {
  background(207, 45, 45);

  // X
  strokeWeight(30);
    line(20,0,420,400);
    line(-20,0,380,400);
    line(380,0,-20,400);
    line(420,0,20,400);
  
  
  
  //oops text
  fill(0,0,0);
  textSize(100);
  text("OOPS!", 40,200);
   
  
  fill(115, 10, 10);
  textSize(100);
  text("OOPS", 43,205);
  
  fill(173, 0, 0);
  textSize(100);
  text("OOPS!", 45,210);
  
  fill(245, 39, 39);
  textSize(100);
  text("OOPS!", 47,215);
  
   fill(255, 64, 64);
  textSize(100);
  text("OOPS!", 49,220);
  
   fill(255, 94, 94);
  textSize(100);
  text("OOPS!", 51,225);
  
 
  fill(255,255,255);
  textSize(100);
  text("OOPS!", 55,230);
 
  
    
  textSize(15);
  text ('You got the answer wrong!',113,350);
 
  restartButton.show();
  
}

function processAnswer() {
  userAnswer=this.value();
}


