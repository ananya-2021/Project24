const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var hammer;
var stone;
var rubber;
var sand1,sand2,sand3,sand4,sand5;
var iron;

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

	ground = new Ground(400,690,800,20)
	hammer = new Hammer(100,100);

	stone = new Stone(600,600,70,70);
	rubber = new Rubber(500,600,30);
	sand1 = new Sand(400,600,3,3);
	sand2 = new Sand(395,600,3,3);
	sand3 = new Sand(390,600,3,3);
	sand4 = new Sand(385,600,3,3);
	sand5 = new Sand(380,600,3,3);
	iron = new Iron(300,600,60,50);

}

function draw(){
    background("lightBlue");
	Engine.update(engine);

    ground.display();
    stone.display();
	hammer.display();
	rubber.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	iron.display();
 
}
