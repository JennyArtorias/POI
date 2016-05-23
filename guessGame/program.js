
//Game variables intialized..

var mysteryNumber = Math.floor(Math.random() * 100);
console.log(mysteryNumber);
var playersGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var gameState = "";
var gameWon = false


//The input and output fields changing fields

var input = document.querySelector("#input");
var output = document.querySelector("#output");


//The button 
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

//The Arrow

var arrow = document.querySelector("#arrow");

function render() {
    //Position the arrow
    //Multiply the players guess by 3 to get the 
    //correct pixel position on the scale

    arrow.style.left = playersGuess * 3 + "px";
}




  
// when enter is pressed
  window.addEventListener ("keydown", keydownHandler, false);
    
    function keydownHandler(event) {
        if (event.keyCode === 13)
        {
          validateInput();
        }
    }


// when button is clicked

function clickHandler() {

    validateInput();  
    

    guessesRemaining = guessesRemaining - 1 ;
    guessesMade = guessesMade + 1;
    gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;


}

// game logic 


function playGame() {
    playersGuess = parseInt(input.value);



    if (playersGuess > mysteryNumber) {
        output.innerHTML = "That's too high." + gameState;

        //check for the end of the game
        if(guessesRemaining < 1) {
          endGame();
        }

    }

    else if (playersGuess < mysteryNumber) {
        output.innerHTML = "Thats too low." + gameState;

        //check for the end of the game
        if(guessesRemaining < 1) {
          endGame();
        }
    }

    else if (playersGuess === mysteryNumber) {
        gameWon = true;
        endGame();

    }

    render();
  
}

    function endGame() {
        if (gameWon) { 
            output.innerHTML =
                "yes, it's " + mysteryNumber + "!" + "<br>"
                + "It only took you " + guessesMade + " guesses.";

        }
        else {
            output.innerHTML
            = "No more guesses left!" + "<br>"
            + "The number was: " + mysteryNumber + ".";

        }


        //Disable the button
        button.removeEventListener("click", clickHandler,false);
        button.disabled = true;

        //Disable the enter key
        window.removeEventListener("keydown", keydownHandler, false)

        //Disable the inputfield
        input.disabled = true;




    }
    
        
    function validateInput () {
        playersGuess = parseInt(input.value);

        if(isNaN(playersGuess)) {
          output.innerHTML = "Please enter a number."
        } else {
          playGame();

        }

    }























