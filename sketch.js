var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var games=null
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var score, buttonhaspressed;
var gamerefresh;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
button=createButton('s')


score=0
buttonhaspressed=0
gamerefresh=1000
}

function draw() {
  createCanvas(windowWidth, windowHeight)
  background('green');
  
  button.mousePressed(()=>{
    games='play'
    game.getState();
    game.start();
  })

  if(games==='play'){
   
    textSize(50)
    text('Coins: '+score, width/1.6-width/2, height/2-100)
    

    if (playerCount > 1) {
      game.update(1);
      
    }
    

 
    if (gameState === 1) {
      clear(); 
      background('black')
      game.play();

      if(player.amount>4&&player.amount<6){
        score=score+1
     
        
      }
    

  

        gamerefresh=gamerefresh-1
     
      
   
      if(gamerefresh<1){
        player.updateCount(0);
        game.update(0);
        gamerefresh=1000
      }

      

  
    }
    if (gameState === 2) {
     
      game.end();
    }


  }
}