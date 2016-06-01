var monster = {
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 128,
  sourceHeight: 64,

  IMAGE: 'background.png',
  SIZE: 32,

  x: 0,
  y: 0,
  width: 32,
  height: 32,

  COLUMNS: 3,

  //frames
  currentFrames: 0,
  numberOfFrames: 5,

  foward: true,

  //STATES

  HIDING: 0,
  JUMPING: 1,
  state: this.HIDING,


  //A propety to store the random time

  waitTime: undefined,

  //A methodt o find a random animation time

  findWaitTime: function () {
      this.waitTime = Math.ceil(Math.random() * 60);
      console.log(findWaitTime())

  },


  //The monster's updateAnimation method
  updateAnimation: function () {
      //Figure out the monster's state

      if(this.waitTime > 0 || this.waitTime === undefined) {
        this.state = this.HIDING;

      } else {
        this.state = this.JUMPING;

      }


      //Switch the monster's action based on its state 

      switch(this.state) {
          case this.HIDING:
              this.currentFrame = 0;
              this.waitTime--;
              break;

          case this.JUMPING:
          //IF THE last frame has been reached, set foward to false
           if(this.currentFrame === this.numberOfFrames) {
                this.forward = false;
           }   

           //If tthe first frame has been reached set foward to true
           if (this.currentFrame === 0 && this.forward === false) {
              //Set foward to true finda new wait time
              this.forward = true;
              this.findWaitTime();
              this.state = this.HIDING;
              break
           }

           //add frames if going foward - frames if goingbackwards

           if(this.forward){
                currentFrame++
           } else {
                currentframe--
           }

           this.sourceX = Math.floor(this.currentFrame % this.COLUMNS) * this.SIZE
           this.sourceY = Math.floor(this.currentFrame / this.COLUMNS) * this.SIZE          


      }
    }
  }

 










