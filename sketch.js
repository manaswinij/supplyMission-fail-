const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball, ballSprite,ballImg;
var helicopter,helicopterImg, helicopterSprite;

function preload()
{
	helicopterImg=loadImage("images/helicopter.png")
	ballImg=loadImage("image/package.png")
}


function setup(){
    createCanvas(800, 700);
	rectMode(CENTER);
    
    ball=createSprite(width/2, 80, 10,10);
	ball.addImage("packageIMG")
	ball.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options={
        restitution:0.5
    }

    ball=Bodies.circle(200,100,30,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
	ellipse(ball.position.x,ball.position.y,30,30)
	

}

