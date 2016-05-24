
// intialize game variables
var map = [];


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


//The output element
var output = document.querySelector("#output");







//Display the player's location

output.innerHTML = map[mapLocation];





