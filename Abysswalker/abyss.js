// Create the monster object

var monster = {
    IMAGE: "frames.png",
    SIZE: 128,

    //THe number of animation frames and the starting frame
    numberOfFrames: 5,
    currentFrame: 0,

    //Properties of the animation cell's X and Y position on the tile sheet
    //They're 0 when this object first loads 

    sourceX: 0,
    sourceY: 0,

    //THe monster's UpdateAnimation method
    updateAnimation: function () {
        this.sourceX = this.currentFrame * this.SIZE;
        this.sourceY = 0;

        if ( this.currentFrame < this.numberOfFrames) {
            this.currentFrame++;

        }
    }
};

//Set up the canvas and drawing surface    
var canvas = document.querySelector("canvas")
var drawingSurface = canvas.getContext("2d");

//Load the animation tile sheet

var image = newImage();
image.addEventListener("load", loadHandler, false);
image.src = Monster.IMAGE;

function loadHandler() {
    //start the aniamtion 
}

























