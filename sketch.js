const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine, world;
var playButtonImage;
var homepage, homepageImage;
var gameState = "homepage";
var image;
var button;
var playButton = document.getElementById("playButton");
var ground;
var player, playerImage, playerSprite;
var obstacle1, obstacleImage;
var counter = 1;
var jumpButton = document.getElementById("jumpButton");
var playBg;
var obstacleCounter = 0;
var endBg;
var block1;
var obstaclesGroup;
var obstacle1X;
var blockThing;
var playerSprite;
var invisPlayerSprite;
var invisBlock;
var leftBlock1, leftBlock2, leftBlock3;
var blockSprite1;
var blockBody1, blockBody2, blockBody3;
var invisObstacleSprite1, invisObstacleSprite2;
var bgSong, deathNoise, yay;
var fireworks1, fireworks2, fireworks3, fireworks4, fireworksImage;
var winBg, endBgImage;

function preload() {
  playButtonImage = loadImage("play_button.png");
  homepageImage = loadImage("homepage.png");
  obstacleImage = loadImage("obstacle.png");
  blockImage = loadImage("block.png");
  bgSong = loadSound("music run song.wav");
  fireworksImage = loadImage("fireworks.png");
  winBg = loadImage("WinBg.png");
  endBgImage = loadImage("EndBg.png");
  deathNoise = loadSound("death noise.wav")
  yay = loadSound("yay.wav");
}

function setup() {
  createCanvas(1200,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 700, 2500, 207);
  engine.timing.timeScale = 2;
  player = new Player(200, 546);
  //playerSprite.draw = function() {ellipse(player.body.position.x , player.body.position.y, 100, 100)}
  //block1 = new Block(600, 300);

  obstaclesGroup = new Group();
 
  obstacle1 = createSprite(1300,550,100,100);
  obstacle2 = createSprite(1400,550,100,100);
  obstacle3 = createSprite(1500,550,100,100);
  obstacle4 = createSprite(1600,550,100,100);
  
  blocksGroup = new Group();

  
  blockSprite1 = createSprite(0, 0, 100, 98)
  blockSprite1.visible = false;
  blockSprite2 = createSprite(0, 0, 100, 98)
  blockSprite2.visible = false;

  //ground = new Ground(block1.width/2 + block1.x, block.height )

  playerSprite = createSprite(0, 0, 50, 50);

  invisPlayerSprite = createSprite(0, 0, 100, 110);
  invisPlayerSprite.visible = false;

  //blockBody1 = new Block(800, 546);
  leftBlock1 = createSprite(0, 0, 5, 100);
  leftBlock2 = createSprite(0, 0, 5, 100);
  leftBlock3 = createSprite(0, 0, 5, 100);


  blockBody1 = new Block(850, 546);
  
  blockBody2 = new Block(1150, 646);

  blockBody3 = new Block(1150, 546);

  invisObstacleSprite1 = createSprite(0, 550, 80, 50);
  invisObstacleSprite2 = createSprite(0, 550, 80, 50);
  invisObstacleSprite3 = createSprite(0, 550, 80, 50);
  invisObstacleSprite4 = createSprite(0, 550, 80, 50);

  fireworks1 = createSprite(200, 200);
  fireworks1.visible = false;
  fireworks2 = createSprite(900, 300);
  fireworks2.visible = false;
  fireworks3 = createSprite(600, 250);
  fireworks3.visible = false;
  fireworks4 = createSprite(600, 400);
  fireworks4.visible = false;

  

}

function draw() {
  //background(195, 237, 255); 
  Engine.update(engine);
  
  
  obstaclesGroup.add(invisObstacleSprite1);
  obstaclesGroup.add(invisObstacleSprite2);
  obstaclesGroup.add(invisObstacleSprite3);
  obstaclesGroup.add(invisObstacleSprite4);

  //obstacle1.visible = false;

  if (gameState === "homepage") {
    homepage = createSprite(600, 400, 1200, 800);
    homepage.addImage(homepageImage);    
    drawSprites();
    playButton.onclick = function() {
      playButton.remove();
      playBg = createSprite(600, 400, 1200, 800);
      playBg.shapeColor = rgb(195, 237, 255);
      homepage.visible = false;
      bgSong.play();
      gameState = "play";
      frameCount = 0;
    }

  }

  

  if (gameState === "play") {
    background(195, 237, 255);

    
    
    invisObstacleSprite1.x = obstacle1.x;
    invisObstacleSprite2.x = obstacle2.x;
    invisObstacleSprite3.x = obstacle3.x;
    invisObstacleSprite4.x = obstacle4.x;

    playButton.remove();
    
    playerSprite.x = player.body.position.x;
    playerSprite.y = player.body.position.y;
    player.body.position.x = playerSprite.x;
    player.body.position.y = playerSprite.y;
    drawSprite(playerSprite);

    invisPlayerSprite.x = player.body.position.x;
    invisPlayerSprite.y = player.body.position.y;
    drawSprite(invisPlayerSprite);

    
    player.body.position.x = 200;

    createObstacle(obstacle1, 50);
    drawSprite(obstacle1);
    createObstacle(obstacle2, 75);
    drawSprite(obstacle2);
    createObstacle(obstacle3, 100);
    drawSprite(obstacle3);
    createObstacle(obstacle4, 125);
    drawSprite(obstacle4);
    
    createFireworks(fireworks1, 290, 30);
    drawSprite(fireworks1);
    fireworks1.scale = 0.3;
    createFireworks(fireworks2, 320, 30);
    drawSprite(fireworks2);
    fireworks2.scale = 0.3;
    createFireworks(fireworks3, 360, 30);
    drawSprite(fireworks3);
    fireworks3.scale = 0.3;
    

    ground.display();
    player.display();
    
    createFireworks(fireworks4, 390, 30);
    drawSprite(fireworks4);
    fireworks4.scale = 1.5;

    if (frameCount === 470) {
      gameState = "win";
      yay.setVolume(10);
      yay.play();
    }

    drawSprite(leftBlock1);

    blockBody1.display();
    blockSprite1.x = blockBody1.body.position.x;
    blockSprite1.y = blockBody1.body.position.y;
    drawSprite(blockSprite1);


    blockSprite2.x = blockBody2.body.position.x;
    blockSprite2.y = blockBody2.body.position.y;
    drawSprite(blockSprite2);

    leftBlock1.y = blockBody1.body.position.y;
    leftBlock1.x = blockBody1.body.position.x - 59;
    leftBlock2.y = blockBody2.body.position.y;
    leftBlock2.x = blockBody2.body.position.x - 59;
    leftBlock3.y = blockBody3.body.position.y;
    leftBlock3.x = blockBody3.body.position.x - 59;
    //leftBlock1.visible = false;

    blockBody2.display();
    blockBody3.display();
    
    
    //blockBody2.body.position.y = blockBody3.body.position.y + 100;

    blockBody3.body.position.x = blockBody2.body.position.x;
    
    if (playerSprite.isTouching(leftBlock1) || playerSprite.isTouching(leftBlock2) || playerSprite.isTouching(leftBlock3)) {
      gameState = "end";
      bgSong.stop();
      deathNoise.setVolume(10000);
      deathNoise.play();
    }

    //createBlock(block1, 100, leftBlock1, rightBlock1);
    
    //drawSprite(invisBlock1);
    //drawSprite(block1);

    textSize(30);
    
    jumpButton.onmousedown = function() {
      if (gameState === "play" && (player.body.position.y > 500 || invisPlayerSprite.isTouching(blockSprite1) || invisPlayerSprite.isTouching(blockSprite2))) {
        Matter.Body.applyForce(player.body, player.body.position, {x: 0, y: -0.2});
        Matter.Body.applyForce(player.body, player.body.position, {x: 0, y: 0.01});
        //Matter.Body.applyForce(invisPlayerBody.body, invisPlayerBody.body.position, {x: 0, y: -0.2}); 
      }
    }

    if (keyDown("SPACE") || keyDown("UP_ARROW")) {
      if (gameState === "play" && (player.body.position.y > 500 || invisPlayerSprite.isTouching(blockSprite1) || invisPlayerSprite.isTouching(blockSprite2))) {
        Matter.Body.applyForce(player.body, player.body.position, {x: 0, y: -0.2});
        Matter.Body.applyForce(player.body, player.body.position, {x: 0, y: 0.01});
        //Matter.Body.applyForce(invisPlayerBody.body, invisPlayerBody.body.position, {x: 0, y: -0.2}); 
      }
    }


    if (playerSprite.isTouching(obstaclesGroup)) {
      gameState = "end";
      bgSong.stop();
      deathNoise.setVolume(100);
      deathNoise.play();
    }

    
    
    


    fill("darkblue");
    text("FPS: " + Math.trunc(frameRate()), 10, 30);
    noFill();
  }

  if (gameState === "end") {
    background(255, 255, 255);
    var endBg = createSprite(600, 400, 1200, 800);
    endBg.addImage(endBgImage);
    drawSprite(endBg);
    Matter.Composite.remove(world, blockBody1);
    Matter.Composite.remove(world, blockBody2);
    Matter.Composite.remove(world, blockBody3);
  }

  if (gameState === "win") {
    background(255, 255, 255);

    var winBgSprite = createSprite(600, 400, 1200, 800);
    winBgSprite.addImage(winBg);  
    drawSprite(winBgSprite);
    Matter.Composite.remove(world, blockBody1);
    Matter.Composite.remove(world, blockBody2);
    Matter.Composite.remove(world, blockBody3);
    
    //Matter.Composite.remove(world, player);

  }


}

function createObstacle(obstacleSprite, n) {
  if (frameCount === n) {
    
    obstacleSprite.addImage(obstacleImage);
    obstacleSprite.visible = true;
    obstacleSprite.velocityX = -10;
    obstacleSprite.lifetime = 500;
  }
}


function createFireworks(fireworksSprite, n, lt) {
  if (frameCount === n) {
    fireworksSprite.addImage(fireworksImage);
    fireworksSprite.visible = true;
    if (fireworksSprite === fireworks4) {
      fireworksSprite.lifetime = 60
    } else {
      fireworksSprite.lifetime = 30;
    }
  }
}

function mouseClicked() {
  if (gameState === "win" || gameState === "end") {
    window.location.reload();
    /*player.body.position.y = 400;
    
    gameState = "play";
    blockBody1 = new Block(850, 546);
    blockBody2 = new Block(1150, 646);
    blockBody3 = new Block(1150, 546);
    player = new Player(200, 546);
    //player.body.position.y = 400;
    bgSong.play();
    frameCount = 0;*/
  }
}
