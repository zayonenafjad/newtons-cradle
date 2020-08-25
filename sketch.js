
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bob1,bob2,bob3,bob4,bob5;
var roof1,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
	bob1=new bob(300,380,20);
	bob2=new bob(340,380,20);
	bob3=new bob(380,380,20);
	bob4=new bob(420,380,20);
  bob5=new bob(460,380,20);
  
  roof1=new Roof(370,100,320,30);
  rope1 = new Rope(bob1.body , {x:300,y:100})
  rope2 = new Rope(bob2.body , {x:340,y:100})
  rope3 = new Rope(bob3.body , {x:380,y:100})
  rope4 = new Rope(bob4.body , {x:420,y:100})
  rope5 = new Rope(bob5.body , {x:460,y:100})
}


function draw() {
  rectMode(CENTER);
  background(255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  



  //drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  }
}


