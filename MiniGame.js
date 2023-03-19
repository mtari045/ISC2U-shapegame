var person;
var x = 50;
var coin=[];
//var move=1;
//var obstacle;

function miniGameSetup() {
  createCanvas(canvasSize, canvasSize);
   person = new Person();
  for (var i = 0; i < 50; i++) {
    coin[i] = new Coin (400+i*100, height-50+i*-30);
  }

}

function keyPressed() {
  if (key == ' ') {
    var jump = createVector(0, -5);
    person.applyForce(jump);
  }
    
}



function doMiniGame() {

  goBackButton.show();
  
  
  frameRate(60);
  
  background(23, 29, 41);


  translate(-1 * person.pos.x + 50, 0);
  person.update();
  person.edges();
  person.display();

  if (person.score > 4) {

    stroke(18, 82, 4);
    textSize(60);
    text("You Win", person.pos.x, 100);
    noLoop();
    setTimeout(function() {
      // back to main game
      madeAMistake=false;
      foundCorrects=0;
      timeForMiniGame=false;
      loop();
  }, 2000);
  }

  var gravity = createVector(0, 0.1);
  person.applyForce(gravity);

  if (mouseIsPressed) {
    var force = createVector(-0.05, 0);
    person.applyForce(force);
  }

  //new coin

  for (var i = 0; i < 50; i++) {
    coin[i].show();
    person.hits(coin[i]);
  }
}