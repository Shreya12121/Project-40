var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1, car2, car3, car4;
var cars;
var track,track_image;
var car1_image,car2_image,car3_image,car4_image;

function preload() {
    bg = loadImage("form_bg.jpg");
    car1_image = loadImage("car1.png")
    car2_image = loadImage("car2.png")
    car3_image = loadImage("car3.png")
    car4_image = loadImage("car4.png")
    track_image = loadImage("track.jpg")
}

function setup() {
    // displayWidth and displayHeight
    canvas = createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}


function draw() {
    background(bg)
    if (playerCount === 4) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
    if(gameState===2) {
        game.end();
    }
}