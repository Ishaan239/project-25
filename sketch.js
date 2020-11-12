
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, ground;
var paperIMG, dustbinIMG



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
ground = new Ground(width/2, 670, width, 20)
	//Create the Bodies Here.
	paper = new Paper(200, 450, 40);
	//paper.addImage(paperIMG);
	//paper = loadImage("paper.png")
	dustbin = new Dustbin(1200, 650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 paper.display();
 ground.display();
 dustbin.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:95, y:-95});
	}
}

