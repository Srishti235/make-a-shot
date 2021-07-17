
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paperImg;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	dustbinObj=new dustbin(1200,650);
	groundObject=new ground(width/2,670,width,20);
	paperImg = new paper(100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  
  dustbinObj.display();
  groundObject.display();
  paperImg.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperImg.body,paperImg.body.position,{x:255,y:-145});
	}
}

