//Create variables here
var dog, happyDog, database,SadDog ;
var food,foodS, foodStock;
var lastFed,fedTime;
var feed,addFood;
function preload()
{
	happyDog= loadImage("images/dogImg.png");
SadDog= loadImage("images/Dog(1).png");

}

function setup() {
	createCanvas(500,500);
  
 food=createButton("feed the dog")
  feed.position(700,95)
 feed.mousePressed(feedDog);


addFood=createButton("add food");
addFood.position(800,95)
addFood.mousePressed(addFoods);

}

function draw() {  
background(46, 139, 87);
   fill(255,255,254)
  textSize(15);
  if (lastFed>=12) {
    text("lastFed:"lastFed%12+"PM",350,50);

  }else if(lastFed==0){
  text ("lastFed:12 AM",350,30)

  }else{
  text("lastFed:"lastFed+"AM",350,30);

  }
  fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
})

function feedDog() {
  dog.addImage(happyDog)

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    food:foodObj.getFoodStock()
    FeedTime:hour();

  })
}
function addFoods() {
  foodS++;
  database.ref('/').update({
 food:foodS

  })
}
 foodStock=database.ref('food');
 foodStock.on("value",readStock);


 drawSprites();
 textSize(40);
 fill('red');
 stroke(black);
 text("press up arrow key to feed drago");

function readStock(data) {
  foodS=data.val();

}
function writeStock(x) {
  database.ref('/').update({


  )}

  
}


