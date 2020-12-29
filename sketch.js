
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground;
var paper;
var b1,b2,b3;

function preload(){
	
}


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(width/2,670,width,20);
	paper= new Paper(200,450,40);
	b1 = new dustbin(1290,650,250,20);
	b2 = new dustbin(1170,537,20,250); 
	b3 = new dustbin(1425,537,20,250);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95});
	}
}



