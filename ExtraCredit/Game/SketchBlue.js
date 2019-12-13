let positions = [];
let frame;


function setup(){
  createCanvas(windowWidth, windowHeight); //makes it full size
}

function draw(){
  frame = frameCount;
  fill(0, 12);
  rect(0, 0, width, height);
  fill(0,0,255);
  noStroke(); //gets ride of border
  for(var i=0; i < positions.length; i++){
    ellipse(positions[i][0], positions[i][1], positions[i][2], positions[i][3]);
  }
  	for(var i = 0; i < 10; i++) {
    	var xPos = random (0,width);
    	var yPos = random (0,height);
    	ellipse(xPos,yPos, 1,1);
  }
}

function mouseDragged(){
  if(frame % 1 === 0){
  positions.push([mouseX, mouseY, 10, 10]);
  }
}

function keyPressed(){ //erases drawing
	positions = [];
}