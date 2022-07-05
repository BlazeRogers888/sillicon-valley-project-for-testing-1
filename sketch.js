var trashy,trashyImg
var backgroundImg
var plasticBottle,plasticBottleImg
var appleCore,appleCoreImg
var compost,compostImg
var plasticBin,plasticBinImg
var foodWasteBin,foodWasteBinImg
var compostBin,compostBinImg
var keyCode,keyDown
var plasticBinGroup,foodWasteBinGroup,compostBinGroup
var plasticBottleGroup,compostGroup,appleCoreGroup
var score
var rightArrow,rightArrowImg,leftArrow,leftArrowImg



function preload() {
  trashyImg = loadImage("trashy.png")
  backgroundImg = loadImage("grassBackground.png")
  plasticBottleImg = loadImage("plasticBottle.png")
  appleCoreImg = loadImage("appleCore.png")
  compostImg = loadImage("compost.png")
  plasticBinImg = loadImage("plasticBin.png")
  foodWasteBinImg = loadImage("foodWasteBin.png")
  compostBinImg = loadImage("compostBin.png")
  rightArrowImg = loadImage("rightArrow.png")
  leftArrowImg = loadImage("leftArrow.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  trashy = createSprite(windowWidth/16,windowHeight-100,50,50)
  trashy.addImage(trashyImg)
  trashy.scale = 0.01
  rightArrow = createSprite(windowWidth-100,windowHeight-30,50,50)
  rightArrow.addImage(rightArrowImg)
  rightArrow.scale = 0.1
  leftArrow = createSprite(windowWidth-30,windowHeight-30,50,50)
  leftArrow.addImage(leftArrowImg)
  leftArrow.scale = 0.1
  

  plasticBinGroup = createGroup()
  foodWasteBinGroup = createGroup()
  compostBinGroup = createGroup()

  plasticBottleGroup = createGroup()
  compostGroup = createGroup()
  appleCoreGroup = createGroup()

}

function draw() {
  background(backgroundImg);
  drawSprites()
  //movements
  movement()
  //trash
  
  if(plasticBottleGroup.y = windowHeight){
    score = score-5
  }

  if(appleCoreGroup.y = windowHeight){
    score = score-5
  }

  if(compostGroup.y = windowHeight){
    score = score-5
  }

  if(plasticBottleGroup.isTouching(plasticBinGroup)){
    plasticBottleGroup.destroyEach()
    score = score + 5
  }

  else{
    spawnTrash()
  }

  if(appleCoreGroup.isTouching(foodWasteBinGroup)){
    appleCoreGroup.destroyEach()
    score = score + 5
  }

  if(compostGroup.isTouching(compostBinGroup)){
    compostGroup.destroyEach()
    score = score + 5
  }
  plasticBinSpawn()
  foodWasteBinSpawn()
  compostBinSpawn()

  //score
  text("score:" + score,windowWidth/2,windowHeight/16)

  }

  


function spawnTrash() {
  
  if(frameCount%300 == 0){
    plasticBottle = createSprite(random(windowWidth/512,windowWidth),windowHeight/512,50,50);
    plasticBottleGroup.add(plasticBottle);
    plasticBottle.addImage(plasticBottleImg);
    plasticBottle.velocityY = 10
    plasticBottle.scale = 0.8
    plasticBottle.life = 1000
    plasticBottle.setCollider("rectangle",0,0,300,300)
  }

  if(frameCount%300 == 100){
    appleCore = createSprite(random(windowWidth/512,windowWidth),windowHeight/512,50,50);
    appleCore.addImage(appleCoreImg);
    appleCore.velocityY = 10
    appleCore.scale = 0.3
    appleCore.life = 1000
    appleCoreGroup.add(appleCore);
  }

  if(frameCount%300 == 200){
    compost = createSprite(random(windowWidth/512,windowWidth),windowHeight/512,50,50);
    compost.addImage(compostImg);
    compost.velocityY = 10
    compost.scale = 0.5
    compost.life = 1000
    compostGroup.add(compost);
  }
    
}

function plasticBinSpawn() {
  
  if(keyCode == 80){
    plasticBin = createSprite(trashy.x,trashy.y-30,50,50)
    plasticBin.addImage(plasticBinImg)
    plasticBin.scale = 0.5
    plasticBin.visible = true
    plasticBinGroup.add(plasticBin);

  }
  else{
    plasticBinGroup.destroyEach();
  }
  }

function foodWasteBinSpawn() {
  if(keyCode == 70){
    foodWasteBin = createSprite(trashy.x,trashy.y-30,50,50)
  foodWasteBin.addImage(foodWasteBinImg)
  foodWasteBin.scale = 0.5
  foodWasteBin.visible = true
  foodWasteBinGroup.add(foodWasteBin)
  }
  else{
    foodWasteBinGroup.destroyEach();
  }
  }


function compostBinSpawn() {
  if(keyCode == 67){
    compostBin = createSprite(trashy.x,trashy.y-30,50,50)
  compostBin.addImage(compostBinImg)
  compostBin.scale = 0.5
  compostBin.visible = true
  compostBinGroup.add(compostBin);
  }
  else{
    compostBinGroup.destroyEach();
  }
}

function movement() {
  if(keyDown("LEFT_ARROW")){
    trashy.x = trashy.x-30
  }
  if(keyDown("RIGHT_ARROW")){
    trashy.x = trashy.x+30
  }
}