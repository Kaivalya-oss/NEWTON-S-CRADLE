
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var Cradle1,Cradle2,Cradle3, Cradle4,Cradle5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Ground(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	Cradle1=new ball(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	Cradle2=new ball(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	Cradle3=new ball(startBobPositionX,startBobPositionY,bobDiameter);
	Cradle4=new ball(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	Cradle5=new ball(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: true
	  }
	});


	rope1=new Chain(Cradle1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new Chain(Cradle2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Chain(Cradle3.body,roofObject.body,0, 0)
	rope4=new Chain(Cradle4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Chain(Cradle5.body,roofObject.body,bobDiameter*2, 0)

	
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();
// for the display of objects
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  Cradle1.display();
  Cradle2.display();
  Cradle3.display();
  Cradle4.display();
  Cradle5.display();
 
  
  
	
  
 
  
  
 
}


function keyPressed() {
    if (keyCode === DOWN_ARROW) {

      Matter.Body.applyForce(Cradle5.body,Cradle5.body.position,{x:60,y:75});

    }
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}






