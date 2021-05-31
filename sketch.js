var basketImg,candyImg,bgImg;
var basket,candy;
var canvas;
var c1,c2,c3,c4,c5,c6,c7,c8,c9;
var pc;
var le,re;

function preload(){
c1=loadImage("candy1.png");
c2=loadImage("candy2.png");
c3=loadImage("candy3.png");
c4=loadImage("candy4.png");
c5=loadImage("candy5.png");
c6=loadImage("candy6.png");
c7=loadImage("candy7.png");
c8=loadImage("candy8.png");
c9=loadImage("candy9.png");

bgImg=loadImage("bg.jpg");

basketImg=loadImage("pump.png");

}

function setup(){
  canvas=createCanvas(1100,500);
  candy=createSprite(500,100,60,60);
  c_andy();
  candy.scale=0.6;
  re=createSprite(1100,0,5,500);
  le=createSprite(0,0,5,500);

  basket=createSprite(500,400,60,60);
  basket.addImage(basketImg);
}

function draw(){
background(bgImg);

if(keyDown("LEFT_ARROW")){
  candy.velocityX=-6;
}
if(keyDown("Right_ARROW")){
  candy.velocityX=6;
}

candy.bounceOff(le);
candy.bounceOff(re);

basket.velocityX=9;

basket.bounceOff(le);
basket.bounceOff(re);


drawSprites();
}

function c_andy(){

  var no=Math.round(random(1,9))

if(no===1){
candy.addImage(c1)

}
else if(no===8){
  candy.addImage(c2);

}
else if(no===2){
  candy.addImage(c3);

}
else if(no===2){
  candy.addImage(c3);

}
else if(no===3){
  candy.addImage(c4);
  
}
else if(no===4){
  candy.addImage(c5);
  
}
else if(no===5){
  candy.addImage(c6);

}
else if(no===6){

  candy.addImage(c7);
}
else if(no===7){

  candy.addImage(c8);
}
else if(no===9){
  candy.addImage(c9);
  
}

}