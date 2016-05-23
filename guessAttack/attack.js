

//Game Variables

var enemyX = 80;
var enemyY = 20;
var guessX = 0;
var guessY = 0;
var shotsRemaining = 8;
var shotsMade = 0;
var gameState = "";
var gameWon = false;


//The Game Objects

var cannon = document.querySelector("#cannon");
var enemy = document.querySelector("#enemy");
var missle = document.querySelector("#missle");

// The input and output fields

var inputX = document.querySelector("#inputX");
var inputY = document.querySelector("#inputY");
var output = document.querySelector("#output");

//The button

var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

//explosion

var explosion = document.querySelector("#explosion");


function render() {

    //Position the enemy
    enemy.style.left = enemyX + "px";
    enemy.style.top = enemyY + "px";

    //Position the cannon 
    cannon.style.left = guessX + "px";

    //Position the missle
    missle.style.left = guessX + "px";
    missle.style.top = guessY + "px";

    //Position the explosion
    if (gameWon) {
        explosion.style.left = enemyX + "px";
        explosion.style.top = enemyY + "px";
        explosion.style.display = "block"; // visible explosion

        enemy.style.display = "none"; // invisble enemy
        cannon.style.display = "none" // invisible cannon


    }
}

window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event) {
    if(event.keyCode === 13) {
        playGame();
    }
}


function clickHandler() {
            playGame();
    }




function playGame() {

    shotsRemaining = shotsRemaining - 1;
    shotsMade = shotsMade + 1;
    gameState = " Shots: " + shotsMade + ", Remaining: " + shotsRemaining;

    guessX = parseInt(inputX.value);
    guessY = parseInt(inputY.value);

    //FInd out whether the player's x and y guesses are inside
    //area

    if (guessX >= enemyX && guessX <= enemyX + 20) {
        // Yes within the X range check Y range
        if (guessY >= enemyY && guessY <= enemyY + 20) {
            //both in the X and Y range its hit
            gameWon = true;
            endGame();


        }
    } else {

      output.innerHTML = "Miss" + gameState;
      //check for end of the game

      if (shotsRemaining < 1) {
        endGame();
      }


    }

    //Update Enemy position if the game hasn't been won

    if (!gameWon) {
        //Update the enemys X position
        enemyX = Math.floor(Math.random() * 280);

        //Add 30 to the new Y position so that the enemy moves downwards
        enemyY = enemyY + 30;


    }


    //RENDER the new game state

    render();
    console.log("X: " + enemyX);
    console.log("Y: " + enemyY);



}

    function endGame() {
        if(gameWon) {
            output.innerHTML = "Hit! You saved the earth!" + "<br>"
            + "It only took you " + shotsMade + "shots.";

        } else {
            output.innerHTML = "You lost!" + "<br>" + "Hehe";
        }
    }



























































