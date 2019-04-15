'use strict'

function Score (canvas) {
    this.size = 50;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width/1.2;
    this.y = this.canvas.height/1.2;
    this.mouse = new Mouse(this.canvas);
}



Score.prototype.render = function() {
    this.ctx.font = "20px Georgia";
    this.ctx.fillText("Number of lives" , 10, 50);  
}

