'use strict'
console.log('cheese');

function Cheese (canvas) {
    this.size = 40;
    this.direction = 1;
    this.speed = 0;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.img = document.getElementById('imgCheese');
    this.x = Math.random() * (this.canvas.width - 15)
    this.y = this.canvas.height/12;
}


Cheese.prototype.render = function() {
    this.ctx.drawImage(this.img,this.x - this.size/2, this.y-this.size/2, this.size, this.size); 
    console.log('render cheese');
    
}


Cheese.prototype.update = function() {
    this.x = this.x + this.direction * this.speed;
}