
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ball_options;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ball_options={
		isStatic:false,
		restitusion:0.3,
		fricition:0,
		density:1.2
	}

	ground = new Ground(width/2,670,width,10);
	leftSide = new Ground(1100,600,20,120);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Matter.Bodies.circle(400,690,3,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  background(51);
  rectMode(CENTER);
  Engine.update(engine);
  
  ellipse(ball.positionX,ball.positionY,20);
  ground.show();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:2})
	}
}



