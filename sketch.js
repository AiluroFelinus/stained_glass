var pixels=[];
var pixel;
var dimensions=25;
function setup() {
  createCanvas(400, 400);
 
pixel = function(x,y){
  this.x=x;
  this.y=y;
  this.inc=0.1;
  this.speed=1;
  
  this.paint=function(){
    this.color=color(sin((this.x^this.y+this.inc)/this.speed)*127.5+127.5,sin((this.x^this.y+2*PI/3+this.inc)/this.speed)*127.5+127.5,sin((this.x^this.y+4*PI/3+this.inc)/this.speed)*127.5+127.5);
    stroke(this.color);
    fill(this.color);
    rect(this.x*height/dimensions,this.y*width/dimensions,this.x+height/dimensions,this.y+width/dimensions);
    this.inc+=0.1;
   
  };
}
for(var i=0;i<dimensions;i++){
  for(var j=0;j<dimensions;j++){
    pixels.push(new pixel(i,j));
  }
}
}

function draw() {
  background(255);
  for(var i=0;i<pixels.length;i++){
    pixels[i].paint();
  }
}
