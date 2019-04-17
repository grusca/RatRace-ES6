'use strict'

function Cheese (canvas) {
    this.size = 40;
    this.direction = 1;
    this.speed = 0;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.img = document.getElementById('imgCheese');
    this.x = Math.floor(Math.random()*this.canvas.width);
    this.y = this.canvas.height/18;
}


Cheese.prototype.render = function() {
    this.ctx.drawImage(this.img,this.x - this.size/2, this.y-this.size/2, this.size, this.size);     
}


Cheese.prototype.update = function() {
    this.x = this.x + this.direction * this.speed;
}