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


           // createCanvas(windowWidth, windowHeight)
    player1 = createSprite(width/1.9-width/2, height/2+500);
    player1.addImage("player1",player_img);
    player1.scale=.9
    player2 = createSprite(width/1-width/2, height/2+400);
    player2.addImage("player2", player2_img);
    player2.scale=.9
    players=[player1,player2];


        }
    
    play(){
        
        
                form.hide();
                fill('white')
                textSize(40)
                text('Coins: '+score, width/1.6-width/2, height/2-300)
                textSize(18)
                fill('red')
                text('Note-If you are waiting, spectating the game, ', width/.9-width/2, height/2-400)
                text('players have a time limit and once their ', width/.9-width/2, height/2-380)
                text('time is over you will get a turn to join ', width/.9-width/2, height/2-360)
                text('DO NOT LEAVE!', width/.9-width/2, height/2-340)
                text('Remember to be Fast! ', width/.9-width/2, height/2-320)
              
                Player.getPlayerInfo();
                //image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=800;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                    
                         
                         fill("black");
                         textSize(15);
                         text(allPlayers[plr].name ,x-35,y+30);
                         text(allPlayers[plr].amount, x-35, y+45);

                         
                     
                  
               if(player.amount>4&&player.amount<6){
                   player.amount++
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
            
                 if (frameCount % 50 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     fruits.scale=.8
                     var rand = Math.round(random(1,2));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit5_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit3_img);
                         break;
                        
                     }
                     fruitGroup.add(fruits);
                     
                 }

                 if (frameCount % 80 === 0) {
                    fruits2 = createSprite(random(100, 1000), 0, 100, 100);
                    fruits2.velocityY = 8;
                    fruits2.scale=.8
                    var rand = Math.round(random(1,2));
                    switch(rand){
                      
                        case 1: fruits2.addImage("fruit1", fruit2_img);
                        break;
                        case 2: fruits2.addImage("fruit3", fruit1_img);
                        break;
                      
                        
                    }
                    fruit2Group.add(fruits2);
                    
                }
                if (frameCount % 140 === 0) {
                    fruits3 = createSprite(random(100, 1000), 0, 100, 100);
                    fruits3.velocityY = 10;
                    fruits3.scale=.6
                    var rand = Math.round(random(1,1));
                    switch(rand){
                      
                        
                      
                        case 2: fruits3.addImage("fruit6", fruit6_img);
                        break;
                        case 1: fruits3.addImage("bestc", bestcard);
                        break;
                        
                        
                    }
                    fruit3Group.add(fruits3);
                    
                }
                if (frameCount % 200 === 0) {
                    fruits4 = createSprite(random(100, 1000), 0, 100, 100);
                    fruits4.velocityY = 15;
                   fruits4.scale=1
                   fruits4.debug=false
                    var rand = Math.round(random(1,1));
                    switch(rand){
                      
                        
                      
                        
                        case 1: fruits4.addImage("e", bullet1);
                        break;
                        
                        
                    }
                    fruitEGroup.add(fruits4);
                    
                }



            
                  if (player.index !== null) {
                    
                     if(player1.isTouching(fruitGroup)) {
                         fruitGroup.destroyEach();
                         fruit2Group.destroyEach();
                         fruit3Group.destroyEach();
                         player.amount ++;
                         player.update();
                         score=score+1
                     }
                 
                  if(player.amount<0){
                      score=-10
                      fill('red')
                      textSize(50)
                      text('Your score Is less than 0.', width/1.2-width/2, height/2-300)
                  }
         


                     
                     if(player1.isTouching(fruit2Group)) {
                        fruitGroup.destroyEach();
                        fruit2Group.destroyEach();
                        fruit3Group.destroyEach();
                        player.amount= player.amount+5;
                        player.update();
                        score=score+10
                    }
                    if(player1.isTouching(fruit3Group)) {
                        fruitGroup.destroyEach();
                        fruit2Group.destroyEach();
                        fruit3Group.destroyEach();
                        player.amount= player.amount+10;
                        player.update();
                        score=score+25
                    }
                    if(player1.isTouching(fruitEGroup)) {
                       fruitEGroup.destroyEach()
                       player.amount= player.amount-10;
                        player.update();
                     
                    }



                     if(player2.isTouching(fruitGroup)) {
                        fruitGroup.destroyEach();
                        fruit2Group.destroyEach();
                        fruit3Group.destroyEach();
                        player.amount ++;
                        player.update();
                        score=score+1
                    }
                   if(player2.isTouching(fruit2Group)) {
                    fruitGroup.destroyEach();
                    fruit2Group.destroyEach();
                    fruit3Group.destroyEach();
                        player.amount= player.amount+5;
                        player.update();
                        score=score+10
                    }
                    if(player2.isTouching(fruit3Group)) {
                        fruitGroup.destroyEach();
                        fruit2Group.destroyEach();
                        fruit3Group.destroyEach();
                        player.amount= player.amount+10;
                        player.update();
                        score=score+25
                    }
                    if(player2.isTouching(fruitEGroup)) {
                       fruitEGroup.destroyEach()
                       player.amount= player.amount-10;
                       player.update();
                     
                    }
                    
                  }

                

         
        
        
         

    }

    end(){
       console.log("Game Ended");
    }

    scoreincrease(){
        amount=amount+5
    }
}