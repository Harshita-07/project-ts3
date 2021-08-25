const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function preload(){
  polygonImg = loadImage("hexagon.png")
  getTime();
  backgroundImg = loadImage("bg.png");

}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
  polygon = Bodies.circle(200, 200, 20)
  World.add(world, polygon)
  slingshot = new slingShot(polygon, {x:200, y:200});

  stand1 = new Ground(500, 300, 250, 20);
  box1level1 = new Box(425, 250, 40, 40);
  box12evel1 = new Box(475, 250, 40, 40);
  box13evel1 = new Box(525, 250, 40, 40);
  box14evel1 = new Box(575, 250, 40, 40);
  box1level2 = new Box(450, 200, 40, 40);
  box2level2 = new Box(500, 200, 40, 40);
  box3level2 = new Box(550, 200, 40, 40);
  box1level3 = new Box(475, 150, 40, 40);
  box2level3 = new Box(525, 150, 40, 40);
  box1level4 = new Box(500, 100, 40, 40);

  stand2 = new Ground(950, 200, 250, 20);
  box1 = new Box(875, 175, 40, 40);
  box2 = new Box(925, 175, 40, 40);
  box3 = new Box(975, 175, 40, 40);
  box4= new Box(1025, 175, 40, 40);
  box5= new Box(900, 100, 40, 40);
  box6= new Box(950, 100, 40, 40);
  box7= new Box(1000, 100, 40, 40);
  box8= new Box(925, 50, 40, 40);
  box9= new Box(975, 50, 40, 40);
  box10= new Box(950, 1, 40, 40);



}
function draw() {
  if (backgroundImg){
    background(backgroundImg);
}
Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40)

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();


  box1level1.display();
  box12evel1.display();
  box13evel1.display();
  box14evel1.display();
  box1level2.display();
  box2level2.display();
  box3level2.display();
  box1level3.display();
  box2level3.display();
  box1level4.display();

  slingshot.display();
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition (polygon,{x:mouseX, y:mouseY} )

}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if (keyCode===32){
      //slingshot.attach(polygon);
  }
}

async function getTime() {
    var response = await fetch("http://worldtimeapi.org/api//Asia/Kolkata");
    var responseJSON =  await response.json();
    console.log(responseJSON);
    var dateTime = responseJSON.datetime
    console.log(dateTime);
    var hour = dateTime.slice(11,13)
    console.log(hour);

    if(hour>=06 && hour<=18){
        bg = "bg.png";
    }
    else {
        bg = "bg2.jpg";
    }

}