var car,wall;
var mass,speed;
var deform;
function setup(){
  createCanvas(800,800);
car=createSprite(100,400,100,50);
wall=createSprite(750,400,100,800);
speed=random(5,10);
mass=random(2,10);
car.velocityX=speed;

}
function draw(){
  background(0);
  if(wall.x-car.x < car.width/2+wall.width/2){
    car.velocityX=0;
    deform=(0.5*mass*speed*speed);
    if(deform>180){
      car.shapeColor=rgb(100,0,0)
    }
    if(deform>100 && deform<180){
      car.shapeColor=rgb(100,100,0);
    }
    if(deform<100){
      car.shapeColor=rgb(0,100,0)
    }

  }
  drawSprites();
}
