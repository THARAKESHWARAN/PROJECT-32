const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1, base2;
var poly;
var polyConstraint;
var ground;
var state;
var score;
var textColor = 0;

var engine;
var world;

var box;

var boxArray = [];

var bgColor = 255;

function preload () {
  getBg();
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200, 500);

  state = "set";

  ground = Bodies.rectangle(750, 500, 1200, 20, { isStatic: true });
  World.add(world, ground);

  base1 = new Base(500, 400, 300, 20);
  base2 = new Base(1000, 250, 300, 20);

  poly = new Polygons(150, 300);
  polyConstraint = new SlingShot(poly.body, { x: 150, y: 300 });

  box[1] = new Box(400, 365, "red");
  box[2] = new Box(430, 365, "red");
  box[3] = new Box(460, 365, "red");
  box[4] = new Box(490, 365, "red");
  box[5] = new Box(520, 365, "red");
  box[6] = new Box(550, 365, "red");
  box[7] = new Box(580, 365, "red");
  box[8] = new Box(430, 315, "blue");
  box[9] = new Box(460, 315, "blue");
  box[10] = new Box(490, 315, "blue");
  box[11] = new Box(520, 315, "blue");
  box[12] = new Box(550, 315, "blue");
  box[13] = new Box(460, 265, "green");
  box[14] = new Box(490, 265, "green");
  box[15] = new Box(520, 265, "green");
  box[16] = new Box(490, 220, "white");
  box[17] = new Box(930, 215, "red");
  box[18] = new Box(960, 215, "red");
  box[19] = new Box(990, 215, "red");
  box[20] = new Box(1020, 215, "red");
  box[21] = new Box(1050, 215, "red");
  box[22] = new Box(1080, 215, "red");
  box[23] = new Box(1110, 215, "red");
  box[24] = new Box(960, 165, "blue");
  box[25] = new Box(990, 165, "blue");
  box[26] = new Box(1020, 165, "blue");
  box[27] = new Box(1050, 165, "blue");
  box[28] = new Box(1080, 165, "blue");
  box[29] = new Box(990, 115, "green");
  box[30] = new Box(1020, 115, "green");
  box[31] = new Box(1050, 115, "green");
  box[32] = new Box(1020, 70, "white");

  for (var i = 1; i <= 32; i++) {
    boxArray.push(box[i]);
  }

  score = 0;

  Engine.run(engine);

}

function draw() {
  background(bgColor);

  base1.display();
  base2.display();

  poly.display();
  polyConstraint.display();

  for (var i = 0; i <= 31; i++) {
    boxArray[i].display();
    boxArray[i].score();
  }

  drawSprites();

  push();
  fill("purple");
  stroke("blue");
  strokeWeight(2);
  textSize(20);
  text("WHEN AWAY, PRESS SPACE TO GET BACK THE POLYGON", 150, 50);
  pop();

  Engine.update(engine);

  push();
  fill(textColor);
  text("SCORE: "+score, 750, 50);
  pop();

  
}

function mouseDragged() {
  if (state === "set") {
    Matter.Body.setPosition(poly.body, { x: mouseX, y: mouseY });
  }
}

function mouseReleased() {
  polyConstraint.fly();
  state = "launched";
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(poly.body, { x: 150, y: 300 })
    polyConstraint.attach(poly.body);
    state = "set";
  }
}

async function getBg() {
   var  IST = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
   var json = await IST.json();

   var datetime = json.datetime;
   var hour = datetime.slice(11, 13)

  if(hour >= 06 && hour <= 18){
    bgColor = 255;
    textColor = 0
  }else {
    bgColor = 0;
    textColor = 255;
  }
}