let positions = [];
let frame;


function setup(){
  createCanvas(windowWidth, windowHeight); //makes it full size
}

function draw(){

  //flower head
  push(); //keeps it contained
  translate(580, 300); //changes place
  fill(0); //changes color
  stroke(255) //creates white outline
  for (let i = 0; i < 10; i ++) { //creates 10 figures
    ellipse(0, 30, 20, 80); //draws ellipse
    rotate(PI/5); //how far each the figures are rotared 
  }
  pop(); //keeps it contained

  //quads
  push();
  translate(580, 300);
  fill(0);
  stroke(255)
  for (let i = 0; i < 10; i ++) {
    quad(189, 18, 216, 18, 216, 360, 144, 360);
    rotate(PI/5);
  }
  pop();

  //sqaures
  push();
  translate(580, 300);
  fill(0);
  stroke(255)
  for (let i = 0; i < 10; i ++) {
    rect(81, 81, 63, 63);
    rotate(PI/5);
  }
  pop();

 
   //bird body
      fill(0);
      stroke(255);
      ellipse(120,60,90,90);

      //bird head
      ellipse(150,30,40,40)

      //bird wing
      fill(0)
      triangle(60, 75, 158, 60, 86, 95);

  
  //c shape
  push();
  translate(1200, 600);
  fill(0);
  stroke(255)
  for (let i = 0; i < 10; i ++) {
  beginShape(TRIANGLE_FAN);
  vertex(57.5, 50);
  vertex(57.5, 15);
  vertex(92, 50);
  vertex(57.5, 85);
  vertex(22, 50);
  vertex(57.5, 15);
  endShape();
  rotate(PI/6);
  }
  pop();


  frame = frameCount;
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke(); 
  for(var i=0; i < positions.length; i++){
    ellipse(positions[i][0], positions[i][1], positions[i][2], positions[i][3]); //enables ellipses to be drawn
  }
  	for(var i = 0; i < 10; i++) { //stars in the background
    	var xPos = random (0,width);
    	var yPos = random (0,height);
    	ellipse(xPos,yPos, 1,1);
  }
}

function mouseDragged(){ //draws line when mouse is dragged across screen
  positions.push([mouseX, mouseY, 5, 5]);
}

function keyPressed(){ //erases drawing
	positions = [];
}