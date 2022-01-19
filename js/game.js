class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];


        }
    
    play(){
        
                form.hide();
                textSize(50)
                text('Coins: '+Coins, width/1.6-width/2, height/2-300)
                Player.getPlayerInfo();
                // image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);
                         text(allPlayers[plr].score, x-35, y+45);

                         
                     }
                  
               if(player.score>4&&player.score<6){
                   player.score++
               }
              
                 
                 }
                
                
                 

                if (touches.length>0 && touches[0].x>width/2 && touches[0].x<width &&player.index !== null) {
                    player.distance -= 50
                    player.update();
                }
                if(touches.length>0&& touches[0].x<width/2&& player.index !== null){
                    player.distance += 50
                    player.update();
                    touches=[]
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                     if(player1.isTouching(fruitGroup)) {
                         fruitGroup.destroyEach();
                         player.score ++;
                         player.update();
                     }
                     if(player2.isTouching(fruitGroup)) {
                        fruitGroup.destroyEach();
                        player.score ++;
                        player.update();
                    }
               
                  }
                

         
           
        
         

    }

    end(){
       console.log("Game Ended");
    }

    scoreincrease(){
        score=score+5
    }
}