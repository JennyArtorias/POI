var sprite = {
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 32,
    sourceHeight: 32,

    x: 0,
    y: 0,
    width: 0,
    height: 0,

    //states

    //Img , size
    IMAGE: "blueComet.png",
    SIZE: 32,

    //the numbers of animation frames and the starting frame 
    numberofFrames: 9,
    currentFrame: 0,

    updateAnimation: function () {

        //Just cycle through all avaliable frames 
        // Use the current Frame to find the correct seciont of the tile sheet to display
        this.sourceX = this.currentFrame * this.SIZE;
        this.sourceY = 0;

        // Incrase the currentFrame by 1 if it's no greater than the total number of frames
        if (sprite.currentFrame < sprite.numberofFrames) {
          sprite.currentFrame++;
          console.log(sprite.currentFrame)
        }

    }
}


//set up canvas

var canvas = document.querySelector('canvas');
var drawingSurface = canvas.getContext('2d');

//Load the animation tile sheet

var blueComet = new Image();
blueComet.addEventListener('load', loadHandler, false)
blueComet.src = './images/blueComet.png'

function loadHandler() {
    updateAnimation();
}

function updateAnimation () {
    var counter2 = 0
    //set timer to call update function every 300 ms
    window.setInterval(timer, 100);
    //UPdate monster's aniamtion frames

    function timer () {
        sprite.updateAnimation();
        console.log(counter2)

        render();   
    }

}


function render () {
    //Clear the canvas of any previous frames
    drawingSurface.clearRect(0, 0, canvas.width, canvas.height);

    //draw the monster's currentanimation

    drawingSurface.drawImage(
        blueComet,
        sprite.sourceX, sprite.sourceY, sprite.SIZE, sprite.SIZE,
        0, 0, sprite.SIZE, sprite.SIZE
        );

}










