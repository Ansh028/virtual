//Create variables here
var dog1;
var happyDog;
var database;
var food;
var foodStock;
var dog_img
var happyDog_img
function preload()
{
  //load images here
dog_img = loadImage("./images/dogImg.png")
happyDog_img = loadImage("./images/dogImg1.png")
}

function setup() {
  database=firebase.database();

	createCanvas(500,500);
  dog1=createSprite(250,250,100,100)
  dog1.addImage("dog1",dog_img);
  dog1.scale=0.1
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  
if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage("dog",happyDog_img)
}
foodStock=database.ref('food');
  foodStock.on("value",readStock);
  drawSprites();
  //add styles here
text("note press up arrow to feed drago ",100,20)
}
function readStock(data){
food=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
database.ref('/').update({
  food:x
})
}



