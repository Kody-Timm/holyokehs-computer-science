

let line1 = {};

let line2 = {};

let line3 = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  initLines()
  angleMode(degrees)
}

function draw() {
  background(220);
  if (mouseY < line1.y1){
    line3.x1 = mouseX
  }
  
  if (mouseY > line2.y1){
    line3.x2 = mouseX
  }
  stroke(255,0,255)
  line(line1.x1,line1.y1,line1.x2,line1.y2)
  stroke(255,0,2)
  //line(line3.x1,line1.y1,line3.x1,line3.y1)
  stroke(2,255,0)
  line(line2.x1,line2.y1,line2.x2,line2.y2)
  stroke(0,0,255)
  line(line3.x1,line3.y1,line3.x2,line3.y2)
  rise = line3.y2 - line3.y1
  run = line3.x2 - line3.x1
  c = sqrt((rise*rise) + (run*run))
  
  
  
  bang = abs(degrees(asin(run/c)).toFixed(0))
  
  myang = 90 - bang
  
  smallc = line1.y1/sin(radians(myang))
  
  b = sqrt((smallc* smallc) - (line1.y1 * line1.y1))
  
  
  stroke(0)
  
  if(line3.x1 < line3.x2){
    text(myang , line3.x1 + b - 20,line1.y1);
    text(180 - myang , line3.x1 + b + 10,line1.y1);
  }else{
    text(myang , line3.x1 - b + 15,line1.y1);
    text(180 - myang , line3.x1 - b - 25,line1.y1);
  }

  //text(180 - abs(at) , b,line1.y1 - 5);

  
}

function getSlope(line){
  rise = line.y2 - line.y1
  run = line.x2 - line.x1
  return rise/run
}

function initLines(){
  line1 = {
  x1 : 0,
  y1 : windowHeight/3,
  x2 : windowWidth,
  y2 : windowHeight/3
};

  line2 = {
  x1 : 0,
  y1 : (windowHeight/3)*2,
  x2 : windowWidth,
  y2 : (windowHeight/3)*2
};

  line3 = {
  x1 : 50,
  y1 : 0,
  x2 : 50,
  y2 : windowHeight
};
}
