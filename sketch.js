var bullet;
var wall;
var speed,weight ,thickness;
var damage;
var PLAY=1,END =0;
gameState=PLAY;

var bulling,walling;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  //creating bullet
  bullet=createSprite(50, 200, 50, 20);
 bullet.shapeColor=255,255,255;
  //creating wall
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  //ranging speed and weight
  speed=random(223,321);
  weight=random(30,52);

 
  
}

function draw() {
  background(0);

  
   
      //assignong speed
      bullet.velocityX=speed;


if(hascollided(bullet,wall)){

  bullet.velocityX=0;

  // damage value
damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


      


  if(damage>10){

    bullet.shapeColor=color(255,0,0);
  }

if(damage<10){
  bullet.shapeColor=color(0,255,0);
}

}





  drawSprites();
}

