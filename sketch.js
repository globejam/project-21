
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var score;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	score = 0;
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	ground2Object=new ground(width/2,10,width,20);
    wallObject = new wall(1595,350,height+20,20);
	wall2Object = new wall(5,350,height,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  wallObject.display();
  wall2Object.display();
  ground2Object.display();
  
  displayText();
  //RecScore();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  	}
	  if (keyCode === DOWN_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-85,y:-85});
  	} 
}

function displayText(){
	textSize(30)
	fill("red");
	text("Score: "+score,20,60);
}
//giving score when it reaches the dustbin.
//function RecScore(){
	//if(paperObject.position.x >1110 && paperObject.position.x <1290){
	//score = score +1;
	//}
//}


