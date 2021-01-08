
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var surface
var pino1,pino2,pino,pino3,pino4,pino5,pino6,pino7
 

var plinko = [];
var particles = [];


function setup() {
	createCanvas(480, 800);
  engine = Engine.create();
	world = engine.world;

	surface = new ground (200,790,600,10)
    pino = new divisions (0,735,10,700)
	pino1 = new divisions (72,735,10,700)                     
	pino2 = new divisions (146,735,10,700)
	pino3 = new divisions (219,735,10,700)
	pino4 = new divisions (288,735,10,700)
	pino5 = new divisions (356,735,10,700)
	pino6 = new divisions (420,735,10,700)
  pino7 = new divisions (475,735,10,700)
  
for(var j = 40; j <=width; j=j+50){
 plinko.push(new Plinko(j,75));
}
 
	Engine.run(engine);
                                                                        
}





function draw() {
  background(0);
  text(mouseX + "," + mouseY, mouseX, mouseY)

  surface.display();
  pino.display();
  pino1.display();
  pino2.display();
  pino3.display();
  pino4.display();
  pino5.display();
  pino6.display();
  pino7.display();
 
  for (var j =40; j< plinko.length; j++){
    plinko[j].display();
  }

  drawSprites();
 
}



