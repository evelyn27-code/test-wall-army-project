var wall,thickness;
var bullet,speed,weight;
var bulletImage;


function preload(){
bulletImage = loadImage("bullet.jpg");
}
function setup() {
  createCanvas(1600,400)

  thickness = random(22,93);
  speed = random(55,100);
  weight = random(400,1500);

  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);

  
}

function draw() {
  
  background(0);  
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  }


 if( damage < 10){
   wall.shapeColor = color(0,255,0);
 } 

 if( damage > 10){
  wall.shapeColor = color(255,0,0);
 }

 
 drawSprites();
  }


