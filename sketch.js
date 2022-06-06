var alienrana,alienranaimg;
var bola,bolaimg;
var espacio;
var asteroides,asteroidesimg;
var background,backgroundimg;
var planeta,planetaimg;
var bricks;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7
function preload(){
espacio=loadImage("espacio.jpg");
alienranaimg=loadImage("bala.png");
bolaimg=loadImage("ranita.png");
asteroidesimg=loadImage("asteroides.png");
planetaimg=loadImage("asteroides.png");

}
function setup(){
createCanvas(600,600);
planeta=createSprite(300,100,20,20);
bola=createSprite(300,380,10,10);
bola.addImage(bolaimg)
bola.scale=0.07
alienrana=createSprite(300,480,20,20);
alienrana.addImage(alienranaimg)
alienrana.scale=0.2;
wall1=createSprite(5,160,10,315);
wall1.shapeColor="black";
wall2=createSprite(560,160,10,315);
wall2.shapeColor="black";
wall3=createSprite(280,5,570,10);
wall3.shapeColor="black";
wall4=createSprite(130,320,300,10);
wall4.shapeColor="black";
wall5=createSprite(440,320,250,10);
wall5.shapeColor="black";
wall6=createSprite(310,350,10,70);
wall6.shapeColor="black";
wall7=createSprite(280,350,10,70)
wall7.shapeColor="black";
bricks=new Group()
}

function draw(){
    background(espacio);
    alienrana.x=World.mouseX;
    createBrickRow(20,"purple");
    createBrickRow(20+15,"purple");
    createBrickRow(20+15+15,"purple");
    createBrickRow(20+15+15+15,"purple");
    createBrickRow(20+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15,"purple");
    createBrickRow(20+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15+15,"purple");

    createEdgeSprites();

    drawSprites();


}

function createBrickRow(y,color){
    for(c=0; c<45; c++){
        var brick=createSprite(20+12*c,y,10,10);
        brick.shapeColor=color;
        bricks.add(brick);

    }
}