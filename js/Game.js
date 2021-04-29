class Game {
    constructor() {

    }
    

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data) {
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

        car1 = createSprite(100, 200)
        car1.addImage(car1_image)
        car2 = createSprite(300, 200)
        car2.addImage(car2_image)
        car3 = createSprite(500, 200)
        car3.addImage(car3_image)
        car4 = createSprite(700, 200)
        car4.addImage(car4_image)
        cars = [car1, car2, car3, car4]
    }

    play() {
        form.hide();
        player.getCarsAtEnd()
        Player.getPlayerInfo()
        var index = 0,
            x = 225,
            y = 0;
        image(track_image,0,-displayHeight*3,displayWidth,displayHeight*4);

        for (var plr in allPlayers) {
            index = index + 1
            x = x + 300
            y = displayHeight - allPlayers[plr].distance;

            cars[index - 1].x = x;
            cars[index - 1].y = y;
            if (index == player.index) {
                fill("yellow")
                ellipse(x,y,60)
                camera.position.x = displayWidth / 2
                camera.position.y = cars[index - 1].y

            }

            // text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 200, displayPosition += 20)
        }
        if(player.distance==4125) {
            game.update(2)
            gameState = 2
            player.rank = player.rank + 1
            alert("congratulations! Your Rank Is:" + player.rank);
            Player.updateCarsAtEnd(player.rank);
        }
        if (keyIsDown(UP_ARROW)) {
            player.distance += 15
            player.update()
        }
        drawSprites();
    }
    end() {
        console.log("GameEnded");
        console.log(player.rank);
    }
}