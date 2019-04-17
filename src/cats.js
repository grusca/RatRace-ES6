'use strict'

function Cat (canvas, y, speed) {
    this.speed = speed;
    this.size = 40;
    this.direction = -1;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.img = document.getElementById('imgCat');
    this.x = this.canvas.width + this.size/2;
    this.y = y;
}


Cat.prototype.render = function() {
    this.ctx.drawImage(this.img,this.x - this.size/2, this.y-this.size/2, this.size*1.4, this.size); 
}


Cat.prototype.update = function() {
    this.x = this.x + this.direction * this.speed;
}
