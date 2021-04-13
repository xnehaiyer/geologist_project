const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone, rubber, iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber = new Rubber(500,550);
    iron = new Iron(1000,400);
    stone = new Stone(720,280);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    rubber.display();
    iron.display();
    stone.display();
}
//Dear Nidhi, I'm sorry to bother you again but after having run this, 
//it is giving an error saying that there is something wrong in matter.js
//I checked the matter.js to make sure i hadnt changed anything but I dont
//think i did and the code is saying there is an error on line 357. Please
//could you help me debug the error in matter.js
//Kind regards, Neha