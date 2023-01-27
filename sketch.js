//namespace - short forms // no change value
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//let is just like a variable but does not have a data type
let engine;
let world;
var ball;
var ground;
var ball2;
var ground2

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  //json style of writing
   var ball_options = {
    restitution: 1,
    frictionAir:0.025,
  }
  var ball2_options = {
    restitution: 0.6,
    density: 0.5,
  }
     
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ground2 = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,ground2);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(300,10,20,ball2_options);
  World.add(world,ball2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  fill("pink");
  ellipse(ball.position.x,ball.position.y,20);

  //fill("blue");
  rect(ground.position.x,ground.position.y,400,20);
  
  //fill("green");
  ellipse(ball2.position.x,ball2.position.y,20);

  //fill("blue");
  rect(ground2.position.x,ground2.position.y,200,20);
 
}

