var car,wall,speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500)
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);  
car.velocityX=speed;
car.depth=wall.depth+1;

if(car.isTouching(wall)){
  car.velocityX=0;
  deformation=(0.5*weight*speed*speed)/22500;
 }

if(deformation<100){
  car.shapeColor=color(0,255,0);
 }

if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
 }

if(deformation>180){
  car.shapeColor=color(255,0,0);
 }


  drawSprites();
}