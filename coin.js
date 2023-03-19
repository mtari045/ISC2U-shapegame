function Coin(x,y){
  this.pos = createVector(x,y);
  this.size=50;
  
  this.show=function(){
    fill(random(0,255), random(0,255),random(0,255));
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }
}