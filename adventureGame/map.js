
// intialize game variables
var map = []; // map

//intialize images 

var images = [];

//intialize the player's input
var playersInput = "";

//intialize the gameMessage
var gameMessage = "";

//Create an array of actions the game understands
//and a variable to store the current action

var actionsIKnow = ["north", "east", "south", "west"];
var action = "";


//Players starting location
var mapLocation = 4;


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
            mapLocation -= 3;
            break;

        case "east":
            mapLocation += 1;
            break;

        case "south":
            mapLocation += 3;

        case "west":
            mapLocation -= 1;
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

      //Display the game message

      output.innerHTML += "<br><em>" + gameMessage + "</em>";

  }



  //CHOOSE the correct action




//Display the player's location

output.innerHTML = map[mapLocation];















