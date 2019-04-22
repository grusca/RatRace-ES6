'use strict'

class Power {
    constructor (canvas, y) {
        this.speed = 5;
        this.size = 40;
        this.direction = 1;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.img = document.getElementById('imgRedbull');
        this.x = 0;
        this.y = y;
    }

    render = function() {
        this.ctx.drawImage(this.img,this.x - this.size/2, this.y-this.size/2, this.size, this.size*2); 
    }

    update = function() {
        this.x = this.x + this.direction * this.speed;
    }
}