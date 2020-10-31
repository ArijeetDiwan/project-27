
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function  setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

constructor(body1,body2,offsetX,offsetY) 
this.offsetX=this.offsetX
this.offsetY=this.offsetY
 var options={
bodyA=body1,
bodyB =body2,
pointB:{x:this.offsetX,y:this.offsetY}

 }
this.rope=Constraint.create(options)
World.add(world.this.rope)
}

rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
rope2=new rope(bobObject1.body,roofObject.body,-bobDiameter*4, 0)
rope3=new rope(bobObject1.body,roofObject.body,-bobDiameter*6, 0)
rope4=new rope(bobObject1.body,roofObject.body,-bobDiameter*8, 0)
rope5=new rope(bobObject1.body,roofObject.body,-bobDiameter*10,0)
rope6=new rope(bobObject1.body,roofObject.body,-bobDiameter*12,0)
{
		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  drawSprites();
 
}



