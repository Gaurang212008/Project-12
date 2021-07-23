var jake,jake_running;
var path,pathImage;
var bomb,bombImage;
var healing,healingImage;
var power,powerImage;
var score;


function preload(){
  //pre-load images
  jake_running=loadAnimation("runner-1.png","runner-2.png");
  pathImage=loadImage("path.png");
  score=0;
}

function setup(){
  createCanvas(600,400);
  //create sprites here
  path=createSprite(250,250,150,390);
  path.addAnimation("path",pathImage);
  path.velocityY=10

  jake=createSprite(260,300,1,1);
  jake.addAnimation("running",jake_running);
  jake.scale=0.1
  
}

function draw() {
  if(path.y>400){
    path.y=0;
  }
  background("black");
  
 drawSprites();

 

}
