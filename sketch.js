var RoketImg, Roket  
var MeteoritoImg, Meteorito
var StarImg, Star
var SpaceImg, Space
var gameState = "play"
var score;
var PLAY = 1;
var END = 0;
var Estrellas
var Obstacles

function preload(){
    RoketImg = loadImage("cohete.png");
    StarImg = loadImage("EstrellA.png");
    MeteoritoImg = loadImage("Meteorito.png");
    SpaceImg = loadImage("Space.jpg")
}


function setup() {
 createCanvas(600,400);
 Space = createSprite(300,200);
 Space.addImage("Space",SpaceImg)
 Space.velocityY = 2.5
 Space.scale = 1.5

 Roket = createSprite(300,300,50,50);
 Roket.addImage("Roket",RoketImg);
 Roket.scale = 0.080;
 
 score = 0;
}


function draw() {
 background(600);
 if (gameState === "play") {
    score = score + Math.round(frameCount/60);
    if(Space.y > 300){
        Space.y = 200
      }
    if (keyDown("left_arrow")) {
      Roket.x = Roket.x -5 
    }
    if (keyDown("right_arrow")) {
      Roket.x = Roket.x +5 
    }
    if (keyDown("up_arrow")) {
      Roket.y = Roket.y -5 
    }
    if (keyDown("down_arrow")) {
        Roket.y = Roket.y +5
    } 
    if (Estrellas.isTouching(Obstacles)){
        Roket.destroy();
        gameState = "end"  
    }
  }
  
 drawSprites(); 
 spawnObstacles();
 text("Puntuación: "+ score, 300,200,"yellow");
 if (gameState === "end") {
    stroke("yellow"); 
    fill("yellow"); 
    textSize(30); 
    text("Game Over", 230,250)
 }
}

function spawnObstacles() {
    if (frameCount % 240 === 0) {
        Obstacles = createSprite(300,0)
        Obstacles.addImage(MeteoritoImg);
        Obstacles.scale = 0.2
        Obstacles.velocityY = 5
        Obstacles.x= Math.round(random(60,350))      
        
        Estrellas = createSprite(300,-75)
        Estrellas.addImage(StarImg);
        Estrellas.scale = 0.2
        Estrellas.velocityY = 5
        Estrellas.x= Math.round(random(60,350))
        Obstacles.lifetime = 800
        Estrellas.lifetime = 800
     }
        
    }