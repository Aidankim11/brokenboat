//Renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;

var balls=[]
var boats=[]
var boatAni=[]
var brokenAni=[]

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  boatimg=loadImage("./assets/boat/boat.png")
  boatjson=loadJSON("./assets/boat/boat.json")
  
  brokenimg=loadImage("./assets/boat/broken_boat.png")
  brokenjson=loadJSON("./assets/boat/broken_boat.json")
}

function setup() {
  canvas = createCanvas(1200,600);
  //creating engine
  engine = Engine.create();
  //creating world inside engine
  world = engine.world;
  //creating objects using classes
  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(600, height, width, 1);
  cannon=new Cannon(180,110,110,50,-PI/4)
  var boatFrames = boatjson.frames
  for (var i = 0; i<boatFrames.length;i++){
    var pos = boatFrames[i].position
    var img = boatimg.get(pos.x,pos.y,pos.w,pos.h)
    boatAni.push(img)
  }

  var brokenFrames = brokenjson.frames
  for (var i = 0; i<brokenFrames.length;i++){
    var pos = brokenFrames[i].position
    var img = brokenimg.get(pos.x,pos.y,pos.w,pos.h)
    brokenAni.push(img)
  }
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  //!== not equal to

  for(var i=0;i<balls.length;i++){
    showballs(balls[i],i)
    for(var j=0;j<boats.length;j++){
      if (balls[i] !== undefined && boats[j] !== undefined) {
        if(Matter.SAT.collides(balls[i].body,boats[j].body).collided){
          boats[j].remove(j)
          World.remove(world, balls[i].body);
          balls.splice(i, 1);
          i--;
        }
      }
      
    }
  }
  showBoats()
  Engine.update(engine);  
  tower.display();
  cannon.display()
  
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    cannonball=new CannonBall(cannon.x,cannon.y)
    balls.push(cannonball)
  }
}

function showballs(ball,index){
  ball.display()
  if(ball.body.position.x>width||ball.body.position.y>height-100){
    World.remove(world,ball.body)
    balls.splice(index,1)
  }
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    balls[balls.length-1].fire()
  }
}

function showBoats() {
  if (boats.length > 0) {
    if (
      boats.length < 4 &&
      boats[boats.length - 1].body.position.x < width - 300
    ) {
      var positions = [-130, -100, -120, -80];
      var position = random(positions);
      var boat = new Boat(width,height - 100, 200, 200, position,boatAni);
      boats.push(boat);
    }

    for (var i = 0; i < boats.length; i++) {
      Matter.Body.setVelocity(boats[i].body, {
        x: -0.9,
        y: 0
      });

      boats[i].display();
      boats[i].animate();
    }
  } else {
    var boat = new Boat(width, height - 100, 200, 200, -100,boatAni);
    boats.push(boat);
  }
}


