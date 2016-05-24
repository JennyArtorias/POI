
// intialize game variables
var map = []; // map
//intialize images 
var images = [];
//intialize blockPathMessages 
var blockedPathMessages = [];

//intialize the player's input
var playersInput = "";

//intialize the gameMessage
var gameMessage = "";

//intialize store object name 
var items = ["flute", "stone", "sword"];

//intialize current location of items on map

var itemLocations = [1, 6, 8];

//Create an array of actions the game understands
//and a variable to store the current action

var actionsIKnow = ["north", "east", "south", "west"];
var action = "";


//Players starting location
var mapLocation = 4;

//intialize backpack 

var backpack = [];


// Create a map 
map[0] = "An old stone keep.";
map[1] = "well";
map[2] = "sunny glade";
map[3] = "sleeping dragon";
map[4] = "path";
map[5] = "ancient gate";
map[6] = "river's edge";
map[7] = "wooden bench";
map[8] = "cottage";


//images corresponding to map location

images[0] = "keep.png";
images[1] = "well.png";
images[2] = "glade.png";
images[3] = "dragon.png";
images[4] = "path.png";
images[5] = "gate.png";
images[6] = "river.png";
images[7] = "bench.png";
images[8] = "cottage.png";

//blockedpath messages stored

blockedPathMessages[0] = "It's too dangerous to move that way.";
blockedPathMessages[1] = "A mysterious force holds you back.";
blockedPathMessages[2] = "A tangle of thorns blocks your way.";
blockedPathMessages[3] = "You can't step over the dragon.";
blockedPathMessages[4] = "heh"
blockedPathMessages[5] = "The gate locks shut.";
blockedPathMessages[6] = "The river is too deep."
blockedPathMessages[7] = "The trees are too thick."
blockedPathMessages[8] = "Scaredy cat."

//the input and output fields access
var output = document.querySelector("#output");
var input = document.querySelector("#input");
var image = document.querySelector("img");

//the button

var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);


//Display the players location

render();

function clickHandler() {
    playGame();

}

function playGame() {
    //Get the player's input and convert it to lowercase
    playersInput = input.value; // get value from input tag
    playersInput = playersInput.toLowerCase(); // conver to lower case

    //Reset these variables from the previous turn

    gameMessage = "";
    action = "";

    //Figure out the player's action

    for(i = 0; i < actionsIKnow.length; i++ ) {
        if(playersInput.indexOf(actionsIKnow[i]) !== -1) {
            action = actionsIKnow[i];
            console.log("player's action: " + action);
            break;

        }
    }

      switch(action) {
        case "north":
            if(mapLocation >= 3) {
                mapLocation -= 3;
            } else {
              gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "east":
            if (mapLocation % 3 != 2){
              mapLocation += 1;
            } else {
              gameMessage = blockedPathMessages[mapLocation];
            }
            break;
            

        case "south":
            if(mapLocation < 6) {
                mapLocation += 3;
            } else {
              gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "west":
            if(mapLocation % 3!= 0)
            {
              mapLocation -=1;
            } else {
              gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        default:
            gameMessage = "I don't understand that.";


      }

      //Render the game

      render();

}

  function render() {
      //Render the location

      output.innerHTML = map[mapLocation];
      image.src = "./images/" + images[mapLocation];
      // image1.setAttribute("src", "./images/" + images[mapLocation]);
      // Display an item if there's one in this location

      //1. loop through all items game items

      for(var i = 0; i < items.length; i++) {
          //find out if theres an item at this location
          if (mapLocation === itemLocations[i]) {
              {
                  //Display it

                  output.innerHTML
                  += "<br> you see a <strong>" + items[i] + "</strong> here.";
              }
          }
      }
      //Display the game message

      output.innerHTML = "<br><em>" + gameMessage + "</em>";
      //Display the player's backpackcontents
      if (backpack.length !== 0) {
          output.innerHTML += "<br> You are carrying: " + backpack.join(", ");

      }

  }



  //CHOOSE the correct action




//Display the player's location

output.innerHTML = map[mapLocation];















