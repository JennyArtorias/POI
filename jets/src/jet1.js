(function () {

//The canvas

var canvas = document.querySelector("canvas");

//Create the drawing surface

var drawingSurface = canvas.getContext("2d");

//Arrays to store the game objects and assets to load

var sprites = [];
var assetsToLoad = [];

//Create the background

var background = Object.create(spriteObject);
background.x = 0;
background.y = 0;
background.sourceY = 32;
background.sourceWidth = 480;
background.sourceHeight = 320;
background.width = 480;
background.height = 320;
sprites.push(background);

//Create the cannon and center it

var cannon = Object.create(spriteObject);
cannon.x = canvas.width / 2 - cannon.width / 2;
cannon.y = 280;
sprites.push(cannon);

//Load the tilesheet image

var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "../images/jet.png"
assetsToLoad.push(image);

//Variable to count the number of assets the game needs to load

var assetsLoaded = 0;

//Game states

var LOADING = 0;
var PLAYING = 1;
var OVER = 2;
var gameState = LOADING;

//Arrow key codes

var RIGHT = 39;
var LEFT = 37;

//Directions

var moveRight = false;
var moveLeft = false;

//Add keyboard listeners
window.addEventListener("keydown", function(event) {
    switch(event.keyCode) {
        case LEFT:
            moveLeft = true;
            break;

        case RIGHT:
            moveRight = true;
            break;


    }
}, false);

window.addEventListener("keyup", function(event) {
    switch(event.keyCode) {
        case LEFT:
            moveLeft = false;
            break;

        case RIGHT:
            moveRight = false;
            break;

    }
}, false);

//Start the game animation loop 

update();

function update() {
    //The animation loop
    requestAnimationFrame(update, canvas);

    //Change what the game is doing based ont he game state
    switch(gameState) {
      case LOADING:
          console.log("loading...");
          break;

      case PLAYING:
          playGame();
          break;

      case OVER:
          endGame();
          break;

    }

    //Render the game

    render();

}

function loadHandler() {
    assetsLoaded++;
    if(assetsLoaded === assetsToLoad.length) {
        //Remove the load event listener
        image.removeEventListener("load", loadHandler, false);

        //start the game

        gameState = PLAYING;
    }
}

function playGame() {
    //Left
    if(moveLeft && !moveRight) {
        cannon.vx = -8;

    }

    //Right
    if(moveRight && !moveLeft) {
        cannon.vx = 8;
    }

    //Set the cannon's velocity to zero if none of the keys are
}
























}());









