const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball,ground;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
world=engine.world;
var ball_opt={
  restitution:1.0
}
ball=Bodies.circle(200,100,20,ball_opt);
World.add(world,ball);


var ground_opt={
  isStatic:true
}
ground=Bodies.rectangle(200,390,200,20,ground_opt);
World.add(world,ground);



}

function draw() {
  background(255,255,255);  
 Engine.update(engine);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


}