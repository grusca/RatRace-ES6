'use strict'
console.log('mouse');

function Mouse (canvas) {
    this.lives = 4;
    this.size = 60;
    this.canvas = canvas;
    this.x = this.canvas.width/2;
    this.y = this.canvas.height/1.2;
    this.ctx = this.canvas.getContext('2d');
    this.img = document.getElementById('imgRat');
    this.speed = 4;
    this.xDirection = 0;
    this.yDirection = 0;
}

Mouse.prototype.render = function () {                                                    
    this.ctx.drawImage(this.img,this.x - this.size/2, this.y-this.size/2, this.size, this.size*1.2); 
}

Mouse.prototype.update = function () {
    this.x = this.x + this.xDirection * this.speed;
    this.y = this.y + this.yDirection * this.speed;
}

Mouse.prototype.setxDirection = function (newDirection) {
    this.xDirection = newDirection;
}

Mouse.prototype.setyDirection = function (newDirection) {
    this.yDirection = newDirection;
}

Mouse.prototype.setLives = function () {
    this.lives --;
}

Mouse.prototype.checkCollisionWithCat = function (cat) {
    
    const catCollisionRight = this.x + this.size/2 > cat.x - cat.size/2;
    const catCollisionLeft = this.x - this.size/2 < cat.x + cat.size/2;
    const catCollisionTop = this.y - this.size/2 < cat.y + cat.size/2;
    const catCollisionBottom = this.y + this.size/2 > cat.y - cat.size/2;
    
    return catCollisionRight && catCollisionLeft && catCollisionTop && catCollisionBottom;
}



Mouse.prototype.checkCollisionWithCheese = function (cheese) {
    console.log('checking collisions with cheese')
    const cheeseCollisionRight = this.x + this.size/2 > cheese.x - cheese.size/2;
    const cheeseCollisionLeft = this.x - this.size/2 < cheese.x + cheese.size/2;
    const cheeseCollisionTop = this.y - this.size/2 < cheese.y + cheese.size/2;
    const cheeseCollisionBottom = this.y + this.size/2 > cheese.y - cheese.size/2;
    
    return cheeseCollisionRight && cheeseCollisionLeft && cheeseCollisionTop && cheeseCollisionBottom;
}

