//Get a reference to the stage

var stage = document.querySelector("#stage");

//the 2d Array that defines the pattern

var pattern = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1]

  ];

  //The size of each cell

  var SIZE = 30;

  //The space betwen each cell
  var SPACE = 10;

  //Display the array

  var ROWS = pattern.length
  var COLUMNS = pattern[0].length;

  for(var row = 0 row < ROWS; row++) {
      for(var column = 0; column < COLUMNS; column++)
          {
            //Div html element called cell

            var cell = document.createElement('div');

            //set its CSS class to CELL
            cell.setAttribute('class', 'cell');

            //add div html element to the stage
            stage.appendChild(cell);

            //Make it black if it's a '1'

            if(pattern[row][column] === 1) {
                cell.style.backgroundColor = "black";

            }

            //Position the cell in teh correct place
            //with 10 pixels of space around it
            cell.style.top = row * (SIZE + SPACE) + 'px';
            cell.style.left = column * (SIZE + SPACE) + 'px';
          }
  }
















