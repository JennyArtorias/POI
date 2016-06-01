//reference to the stage and output 

var stage = document.querySelector('#stage');
var output = document.querySelector('#output');

//keyboard listenenr
window.addEventListener('keydown', keydownHandler, false);

//game map

var map = 
[
[0, 2, 0, 0, 0, 3],
[0, 0, 0, 1, 0, 0],
[0, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 2, 0],
[0, 2, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0]

];

//game objects map

var gameObjects = [

[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[4, 0, 0, 0, 0, 0]

];

//map code

var WATER = 0;
var ISLAND = 1;
var PIRATE = 2;
var HOME = 3;
var SHIP = 4;

//Size of each cell
var SIZE = 64;

//number of rows and columns

var ROWS = map.length;
var COLUMNS = map[0].length;



//arrow key codes

var UP = 38;
var DOWN = 40;
var RIGHT = 39;
var LEFT = 37;

//ship starting position

var shipRow;
var shipColumn;

for(var row = 0; row < ROWS; row++) {
    for(var column = 0; column < COLUMNS; column++) {
        if(gameObjects[row][column] === SHIP ) {
            shipRow = row;
            shipColumn = column;
        }
    }
}

//game variables

var food = 10;
var gold = 10;
var experience = 0;
var gameMessage = "Use arrow keys to find a way home";

render();

function keydownHandler(event) {
    switch(event.keyCode) {
      case UP:

      //find out if the ship's move will be within the playing field
      if(shipRow > 0) {
          //if it is clear the ship currents cell
          gameObjects[shipRow][shipColumn] = 0;

          //Subtract 1 from the ship's row to move it up one rowmap
          shipRow--;
          
          //new ship updated position array
          gameObjects[shipRow][shipColumn] = SHIP;

      }   
      break;

      case DOWN:
          if(shipRow < ROWS - 1) {

              gameObjects[shipRow][shipColumn] = 0;
              shipRow++;
              gameObjects[shipRow][shipColumn] = SHIP;
            }
    
    break;

        case LEFT:
            if(shipColumn > 0) {
                gameObjects[shipRow][shipColumn] = 0;
                shipColumn--;
                gameObjects[shipRow][shipColumn] = SHIP;

         }
        break;

        case RIGHT:
            if(shipColumn < COLUMNS - 1) {
                gameObjects[shipRow][shipColumn] = 0;
                shipColumn++;
                gameObjects[shipRow][shipColumn] = SHIP;

        }
        break;

        }
    //find what celll ship is on 

    switch(map[shipRow][shipColumn]) {
        case WATER:
            gameMessage = "SAIL the open seas."
            break;

        case PIRATE:
            fight();
            break;

        case ISLAND:
            trade();
            break;

        case HOME:
            endGame();
            break;

    }

      //SUbtract some food each turn

      food--;

      //has ship run out of food or gold
      if(food <= 0 || gold <= 0) {
          endGame();
      }

      //Render the game

      render();

    }

    function trade() {
        //Figure out how much food the island has and how much it should cost
        var islandsFood = experience + gold;
        var cost = Math.ceil(Math.random() * islandsFood);

        //player can buy food if they have enough gold
        if(gold > cost) {
            food += islandsFood
            gold -= cost;
            experience += 2;

            gameMessage = "You buy " + islandsFood + " mangos" + " for " + cost + " gold pieces."

        } else {
            //tell if player doesn't have neough gold
            experience +=1;
            gameMessage = "You don't have enough gold to buy food."
          }

        }        
    function fight() {
        // The ship's strength
        var shipStrength = Math.ceil((food + gold) / 2);

        //random number between 1 and ship's strength
        var pirateStrength = Math.ceil(Math.random() * shipStrength * 2);

        //Find out if the pirates are stronger than the player's ship
        if(pirateStrength > shipStrength) {
            //pirate ransack the ship
            var stolenGold = Math.round(pirateStrength / 2);
            gold -= stolenGold;

            //Give player exp trying
            experience += 1;

            //UPdate game message
            gameMessage 
                = "You fight and lose " + stolenGold + " gold pieces."
                + " Ship's strength: " + shipStrength
                + " Pirate's strength: " + pirateStrength;

        } else {
            //player wins pirate gold
            var pirateGold = Math.round(pirateStrength / 2);
            gold += pirateGold;

            //Add experience
            experience += 2;

            //Update game message
            gameMessage 
                = "You fight and win " + pirateGold + " gold pieces."
                + " Ship's strength: " + shipStrength
                + " Pirate's strength: " + pirateStrength;

            }
            }  

            function endGame() {
                if(map[shipRow][shipColumn] === HOME) {
                    //Calculate the score
                    var score = food + gold + experience;

                    //Display the game message
                    gameMessage = "You made it home" + "Final Score: " + score;

                } else {
                    //dipslay game message if run out of food/gold
                    if(gold <= 0) {
                        gameMessage += " You have run out of gold!";

                    } else {
                        gameMessage += " You have run out of food!";

                    }

                    gameMessage += "Your crew throws you overboard!";

                }

                //Remove the keyboard listener to end game
                window.removeEventListener('keydown', keydownHandler, false);

            } 


            function render() {
                  //Clear stage of img cells from previous turn

                  if(stage.hasChildNodes()) {
                      for(var i = 0; i < ROWS * COLUMNS; i++) {
                          stage.removeChild(stage.firstChild);
                      }
                  }

              //Render the game by looping through map arrays
              for(var row = 0; row < ROWS; row++) {
                  for(var column = 0; column < COLUMNS; column++) {
                      //Create img tag called cell
                      var cell = document.createElement('img');

                      //Set its css class to cell
                      cell.setAttribute("class", "cell");

                      //add image tag to #stage 
                      stage.appendChild(cell);

                      //Find correct image for this map cell
                      switch(map[row][column]) {
                          case WATER:
                              cell.src = "./images/water.png";

                          case ISLAND:
                              cell.src = "./images/island.png";

                          case PIRATE:
                              cell.src = "./images/pirate.png";

                          case HOME:
                              cell.src = "./images/home.png";
                              break;
                      }

                      //Position the cell

                      cell.style.top = row * SIZE + 'px';
                      cell.style.left = column * SIZE + 'px';
                  }
              }

              //Display the game message

              output.innerHTML = gameMessage;

              //display players food , gold , exp

              output.innerHTML += '<br>Gold: ' + gold + ', Food: ' + food + ', Experience: ' + experience;
              
                      
            }    












































