'use strict'

function Trap (canvas, y, speed) {
    this.speed = speed;
    this.size = 40;
    this.direction = 1;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.img = document.getElementById('imgTrap');
    this.x = 0;
    this.y = y;
}


Trap.prototype.render = function() {
    this.ctx.drawImage(this.img,this.x - this.size/2, this.y-this.size/2, this.size*1.4, this.size); 
}


Trap.prototype.update = function() {
    this.x = this.x + this.direction * this.speed;
}