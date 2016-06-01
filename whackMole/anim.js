//declare canvas and context

var canvas = document.querySelector('canvas');
drawingSurface = canvas.getContext('2d');


//load image

twoBearFace = new Image()
twoBearFace.addEventListener('load', render, false);
twoBearFace.src = './images/twoBearFace.png'

//events

window.addEventListener('keydown', keydownHandler, false);
window.addEventListener('keyup', keyupHandler, false);


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

  state: 0 //intial

}

function keydownHandler () {
    monster.state = monster.SCARED
    render();
}

function keyupHandler () {
    monster.state = monster.NORMAL
    render();
}

function render () {
    switch(monster.state) {
        case monster.NORMAL:
        drawingSurface.drawImage(
          twoBearFace,
          0, 0, 32, 32,
          0, 0, 32, 32
          )
        break;
        case monster.SCARED:
        drawingSurface.drawImage(
          twoBearFace,
          32, 0, 32, 32,
          0, 0, 32, 32
          )
        break;
    }
}



drawingSurface.drawImage(
    twoBearFace,
    0, 0, 32, 32,
    0, 0, 32, 32
    )






