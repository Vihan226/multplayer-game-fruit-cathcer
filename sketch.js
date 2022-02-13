var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var games=null
var player, form,game;
var player1,player2;
var players;
var fruits, fruits2, fruits3, fruits4;
var fruitGroup, fruit2Group, fruit3Group, fruit4Group, fruitEGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img, fruit6_img, bullet1;
var player_img;
var score, buttonhaspressed;
var gamerefresh;
var scoreg;
var bullet1, bullet2, touch;
var player2_img
var button2;
var power;
var bestcard;
var enemy1, enemy2, enemy;
function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/redplayer.png");
  player2_img = loadImage("images/blueplayer.png");
  fruit1_img = loadImage("usecard16.png");
  fruit2_img = loadImage("usehealth.png");
  
  fruit3_img = loadImage("Coin.png");
  bestcard = loadImage("bestcard.png");
  
  fruit5_img = loadImage("skin1part3.png");

  fruit6_img = loadImage("skin3part4.png");
  bullet1=loadImage('Playerbullet.png')
  fruit2Group = new Group();
  fruit3Group = new Group();
  fruitGroup= new Group()
  fruitEGroup= new Group()
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
button2=createButton('Start')
button2.position(width/1-width/2, height/2)


score=0
buttonhaspressed=0
gamerefresh=1700
scoreg=0

}

function draw() {
  createCanvas(windowWidth, windowHeight)
  background('green');
  
  button2.mousePressed(()=>{
    games='play'
    game.getState();
    game.start();
    button2.hide()
  })
  if(frameCount %10===0){
    enemy1=createSprite(width/1.3-width/2, height/2-500, 10,40)
    enemy1.x=Math.round(random(width/1.6-width/2, width/.8-width/2))
    enemy1.shapeColor='white'
    enemy1.velocityY=15
   
}

  if(games==='play'){
   fill('white')
    textSize(50)
    text('Coins: '+score, width/1.6-width/2, height/2-100)
    

    if (playerCount > 1) {
      game.update(1);
      
    }
    

 
    if (gameState === 1) {
      clear(); 
      background('black')
      game.play();


          
  
      if(score>30&&score<65){
        scoreg=1
      }
      if(score>65&&score<150){
        scoreg=2
      }
      if(score>150&&score<240){
        scoreg=3
      }
      if(score>240&&score<2450){
        scoreg=4
      }
        gamerefresh=gamerefresh-1
     if(score==0){
       scoreg=0
     }

     if(gamerefresh<1){
       button2.show()
     }

      if(gamerefresh<1&& scoreg==1){
        player.updateCount(0);
        game.update(0);
        gamerefresh=1000

        alert("Your will receive 40 Coins by; Go to your Sho Run app and unlock the third deck and purchase the multiplayer card. Then type this code in- jycd1")
     score=0
      }

      if(gamerefresh<1&& scoreg==2){
        player.updateCount(0);
        game.update(0);
        gamerefresh=1000

        alert("Your will receive 80 Coins by; Go to your Sho Run app and unlock the third deck and purchase the multiplayer card. Then type this code in- fydr254")
     score=0
      }
      if(gamerefresh<1&& scoreg==3){
        player.updateCount(0);
        game.update(0);
        gamerefresh=1000

        
        alert("Your will receive 100 Coins by; Go to your Sho Run app and unlock the third deck and purchase the multiplayer card. Then type this code in- jdr8n4")
score=0
      }
      if(gamerefresh<1&& scoreg==4){
        player.updateCount(0);
        game.update(0);
        gamerefresh=1000

        
        alert("Your will receive 200 Coins by; Go to your Sho Run app and unlock the third deck and purchase the multiplayer card. Then type this code in- uitm2ty5")
score=0
      }

      if(gamerefresh<1&&scoreg==0){
        player.updateCount(0);
        game.update(0);
        gamerefresh=1000
        score=0
      }

    
  
    }
    if (gameState === 2) {
     
      game.end();
    }


  }

}