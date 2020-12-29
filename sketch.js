const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinobj,paperobj,groundobj;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	dustbinobj = new Dustbin(1000,650,200,100);
    paperobj = new Paper(200,640,25);
    groundobj = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundobj.display();
  dustbinobj.display();
  paperobj.display();

  drawSprites();
}

function keyPressed() 
{
	if (keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:140,y:-95});
	}
}