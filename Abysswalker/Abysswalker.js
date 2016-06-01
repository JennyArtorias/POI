// Arrow key codes

var UP = 38;
var DOWN = 40;
var RIGHT = 39;
var LEFT = 37;

//Directions

var moveUP = false;
var moveDown = false;
var moveRight = false;
var moveLeft = false;

window.addEventListener('keydown', function (event) {
    switch(event.keyCode) {
        case UP:
            moveUP = true;
            break;
        case DOWN: 
            moveDOWN = true;
            break;
        case LEFT:
            moveLeft = true;
        case RIGHT:
            moveRight = true;

    }
}, false);

window.addEventListener('keyup', function (event) {
    switch(event.keyCode) {
        case UP:
            moveUp = false;
            break;

        case DOWN: 
            moveDown = false;
            break;

        case LEFT:
            moveLeft = false;
            break;

        case RIGHT:
            moveRight = false
            break;


    }
}, false);

function update() {
    //The animation loop

    requestAnimationFrame(update, canvas);

    //Up
    if(moveUp && !moveDown) {
      cat.vy = -5;
    }

    //Down
    if(moveDown && !moveUp) {
      cat.vy = 5;
    }

    //Left
    if(moveLeft && !moveRight) {
      cat.vx = -5;
    }

    //Right
    if(moveRight && !moveLeft) {
      cat.vx = 5;
    }

}

console.log(!moveUp)































