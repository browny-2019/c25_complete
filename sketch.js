
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
dustbinImage = loadImage("sprites/dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground = new Ground(400,680,800,30);
	paperObject = new Ball(10,650,15);
	part1 = new Dustbin(545,615,30,100);
	part2 = new Dustbin(660,650,200,30);
	part3 = new Dustbin(750,615,30,100);
	
	Engine.run(engine);
  
}


function draw() {
 
  background(255);
  ground.display();
 
  //part1.display();
  //part2.display();
  //part3.display();
   
  imageMode(CENTER);
  image(dustbinImage,640,600,250,130);
  paperObject.display();
  
  drawSprites();
 
}
function keyPressed() {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:30,y:-40});
}




