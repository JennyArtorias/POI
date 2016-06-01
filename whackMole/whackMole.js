var gameTimer = {
    time: 0,
    interval: undefined,

    start: function () {
        var self = this;
        this.interval = setInterval(function(){self.tick();}, 1000);

    },
    tick: function () {
      this.time--;
    },
    stop: function () {
        clearInterval(this.interval);
    },
    reset: function () {
        this.time = 0;
    }
}


// monster object

var monster = {
    //size of each frame on tilesheet + columns
    IMAGE: "new.png",
    SIZE: 128,
    COLUMNS: 3,

    //Number of animation frames + start frame
    numberOfFrames: 5,
    currentFrame: 0,

    //animation frames x y coorods intial load
    sourceX: 0,
    sourceY: 0,

    //roperty to control loop ??
    forward: true,

    //STATES
    HIDING: 0,
    JUMPING: 1,
    HIT: 2,
    state: this.HIDING, //default state

    //Properties to reset animation

    timeToReset: 9,
    resetCounter: 0,

    //A property to store the random time

    waitTime: undefined,

    //method to find random animation time
    findWaitTime: function () {
        this.waitTime = Math.ceil(Math.random() * 60);
    },

    //The Monsters updateAnimation method

    updateAnimation: function () {
        this.sourceX = Math.floor(this.currentFrame % this.COLUMNS) * this.SIZE;
        this.sourceY = Math.floor(this.currentFrame / this.COlUMNS) * this.SIZE;
               
    

    //Monsters state figure
    if(this.state !== this.HIT) {
        if(this.waitTime > 0 || this.waitTime === undefined) {
              this.state = this.HIDING;
        } else {
              this.state = this.JUMPING;
        }
    }

    //CHange behaviour of the animation based on the state
    switch(this.state) {
        case this.HIDING:
            this.currentFrame = 0;
            this.waitTime--;
            break;

        case this.JUMPING:
        //If last frame has been reached set foward flag to false
            if(this.currentFrame === this.numberOfFrames) {
                this.forward = false;
            }

            //IF the first frame has been reached, set foward to true
            if(this.currentFrame === 0 && this.forward === false) {
                // set forward to true, find new wait time, set state to hiding break teh switch
                this.forward = true;
                this.findWaitTime();
                this.state = this.HIDING;
                break;

            }

            //ADD 1 to current frame if forward is true, subtract it opposite
            if(this.forward) {
                this.currentFrame++;

            } else {
                this.currentFrame--;

            }
            break;

            case this.HIT:
                //Set the current frame to the last one on the tile to display the eplostion image
                this.currentFrame = 6

            //UPDATE the reset counter by 1
                this.resetCounter++;

                //reset the animation if the reset Counter equals the time to                  
                if(this.resetCounter === this.timeToReset) {
                    this.state = this.HIDING;
                    this.forward = true;
                    this.currentFrame = 0;
                    this.resetCounter = 0;
                    this.findWaitTime90;

                }
                break;
              }
    }
};

// MAIN program

//Load the animation tile sheet

var image = new Image() 
image.addEventListener('load', loadHandler, false)
image.src = "./images/" + monster.IMAGE;

//The number of rows and columsn and size of cellls

var ROWS = 3;
var COLUMNS = 4;
var SIZE = monster.SIZE;
var SPACE = 10;

//Arrays for the monsters, canvas, drawing surface

var monsterObjects = [];
var monsterCanvases = [];
var monsterDrawingSurfaces = [];

//Game variables
var monstersHit = 0;

//Get a reference to the output

var output = document.querySelector('#output');

function loadHandler() {
    //Plot the grid of monsters
    buildMap();

    //Start hte game timer
    gameTimer.time = 30;
    gameTimer.start();

    //Star the animation loop
    updateAnimation();
}

function buildMap() {
    for(var row = 0; row < ROWS; row++) {
        for(var column = 0; column < COLUMNS; column++) {
            //creat single monster obect random time display first frame push array
            var newmonsterObject = Object.create(monster);
            newmonsterObject.findWaitTime();
            monsterObjects.push(newmonsterObject);

            //Create canas tag for each monster add <div id stag tag posistion mousedown listnenr and push array
            var canvas = document.createElement('canvas');
            canvas.setAttribute("width", SIZE);
            canvas.setAttribute("height", SIZE);
            stage.appendChild(canvas);
            canvas.style.top = row * (SIZE + SPACE) + "px";
            canvas.style.left = column * (SIZE + SPACE) + "px";
            canvas.addEventListener("mousedown", mousedownHandler, false);
            monsterCanvases.push(canvas);

            //drawing surface push drawing surface array
            var drawingSurface = canvas.getContext('2d');
            monsterDrawingSurfaces.push(drawingSurface);

        }
    }
}

function updateAnimation() {
    //Set a timer to call updateANimation every 120 ms
    //Whle timer is greater than 0
    if(gameTimer.time > 0) {
        setTimeout(updateAnimation, 120);
    }

    //Loop through all monsters in the monsters array and call own updateANimation methods
    for(var i = 0; i < monsterObjects.length; i++) {
        monsterObjects[i].updateAnimation();
    }

    //check for the end of game
    if(gameTimer.time === 0) {
        endGame();
    }

    //Render the animation
    render();
  }
    function endGame () {
  //Stop gametimer
    gameTimer.stop();

  //Remove mousedown event listener from canvas tag so can't click
    for(var i = 0; i < monsterCanvases.length; i++) {
      var canvas = monsterCanvases[i];
      canvas.removeEventListener("mousedown", mousedownHandler, false);

    }
  }
  
  function mousedownHandler(event) {
      //find which canvas clicked
      var theCanvasThatWasClicked = event.target;
  }  

  //Search the monsterCanvases array for a canvas that matches the one clicked
  for (var i = 0; i < monsterCanvases.length; i++) {
      if(monsterCanvases[i] === theCanvasThatWasClicked) {
          var monster = monsterObjects[i]
          if(monster.state === monster.JUMPING) {
              monster.state = monster.HIT;
              monsterHit++;
          }
        }
      }
  
  function render () {
      for(var i = 0; i < monsterObjects.length; i++) {
          //Get reference to the current monster and drawing surface
          var monster =  monsterObjects[i];
          var drawingSurface = monsterDrawingSurfaces[i];

          //Clear the current monster's canvas
          drawingSurface.clearRect(0, 0, SIZE, SIZE);

          //draw the monsters current animation frame
          drawingSurface.drawImage(
            image,
            monster.sourceX, monster.sourceY, SIZE, SIZE,
            0, 0, SIZE, SIZE
            );
      }
  //Display the output

    output.innerHTML = "Monsters smashed: " + monstersHit + ", Time left: " + gameTimer.time;
  }





































    










































































