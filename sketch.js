var canvas,backgroundimg;
var gameState = 0;
var playerCount;
var database;
var form,game,player;


function setup(){
canvas = createCanvas(400,400);
database = firebase.database;
game = new Game();
game.getstate();
game.start();






}



function draw(){




}