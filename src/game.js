'use strict'
console.log('game');
function Game (canvas) {
    this.mouse = null;
    this.cats = [];
    this.cheese = null;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.gameOver = false;
};

Game.prototype.startLoop = function () {

    this.mouse = new Mouse(this.canvas);

    this.cheese = new Cheese(this.canvas);

    const loop = () => {

        if (Math.random() < .05 ) {
            //const randomNumber = Math.random() * (this.canvas.height - 15)+ 15;
            const yAxis = Math.floor(Math.random() * 3) * this.canvas.height/3+40;
            this.cats.push(new Cat(this.canvas, yAxis))
        }
        this.clearScreen();
        this.updateScreen();
        this.renderScreen();
        this.checkCollisions();
        if (this.gameOver === false)
        console.log(this.mouse.direction)

        window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
}


Game.prototype.clearScreen = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}


Game.prototype.updateScreen = function() {
    this.mouse.update();
    this.cheese.update();
    this.cats.forEach(function(cat) {
        cat.update();
    });
}

Game.prototype.renderScreen = function () {
    this.mouse.render();
    this.cheese.render();
    this.cats.forEach(function(cat) {
        cat.render()
    })
}

Game.prototype.checkCollisions = function() {

}


Game.prototype.setGameOverCallback = function(buildGameOverScreen) {
    this.buildGameOverScreen = buildGameOverScreen;

}
