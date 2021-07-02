var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var backgroundImg

  function preload() {
    backgroundImg = loadImage("snow1.jpg")
  }
 
var snow = [];
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

 
}
 


function draw() {
  background(backgroundImg);
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  if(frameCount%15===0){
    snow.push(new Snow(random(width/50-750, width/50+750),10,10))
  }

  //display the paricles 
  for (var j = 0; j < snow.length; j++) {
    snow[j].display();
  }
}