var monster = {
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 32,
    sourceHeight: 32,

    x: 0,
    y: 0,
    width: 32,
    height: 32,

    //states

    NORMAL: 0,
    SCARED: 1, 

    //Intialized state first load

    state: 0

}

//setting up canvas store variable

var canvas = document.querySelector('canvas');
var drawingSurface = canvas.getContext('2d');

//Loading image / rendering

var monImage = new Image;
monImage.addEventListener('load', render, false);
monImage.src = './images/twoBearFace.png'

//Change the monsters state by pressing a key 

window.addEventListener('keydown', keydownHandler, false);

function keydownHandler (event) {
    becomeScared();

}


function becomeScared () {
    monster.state = monster.SCARED;
    setTimeout(becomeNormal, 1000);
    render();


}

function becomeNormal () {
    monster.state = monster.NORMAL
    render()
}

function render() {
    switch (monster.state) {
        case monster.NORMAL:
            drawingSurface.drawImage (
              monImage,
              0, 0, 32, 32,
              0, 0, 32, 32
              )
            break;
        case monster.SCARED:
            drawingSurface.drawImage (
              monImage,
              32 * monster.state, 0, 32, 32,
              0, 0, 32, 32)
            break;
    }
}
















