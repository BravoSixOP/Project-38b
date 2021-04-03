var cameraImage;
var sprite;
var food;
var obstacle;

function preload(){
  cameraImage = loadImage("images/cameraTest.jpg");
}

function setup(){
  var canvas = createCanvas(1200, 600)
  
  sprite = createSprite(10, 300, 60, 60);
}

function draw(){
  background(220);

  fill("white");
  stroke("white");
  textSize(20);
  text("Green are food  "+ "  |  "+"  Red are obstacles", sprite.x +390, sprite.y-200)

  //image(cameraImage, -width/4.3 + 120, 0, 1200*5.5, 600);

  camera.position.x = sprite.x+500;

  if(keyDown("RIGHT_ARROW")){
    sprite.x+=20;
  }

  var rand = Math.round(random(1,2));
  if(frameCount%50===0){
    switch(rand){
      case 1: food = createSprite(camera.position.x + 610, 300, 60, 60);
      food.shapeColor="green";
      break;
      case 2: obstacle = createSprite(camera.position.x + 650, 300, 60, 60);
      obstacle.shapeColor="red";
      break;
      default: break;
    }
  }
  
  drawSprites();
}

function myFunction(){
  
}