'use strict'

function Game (canvas) {
    this.mouse = null;
    this.cats = [];
    this.traps = [];
    this.cheese = null;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.gameOver = false;
    this.gameSound = new Audio ("sounds/gameSound.wav")
    this.catSound = new Audio ("sounds/catSound.wav")
    this.winSound = new Audio ("sounds/winSound.wav")
    this.gameOverSound = new Audio ("sounds/loseSound.wav")
    this.level = 1;
};


Game.prototype.startLoop = function () {

    this.gameSound.loop = true;
    this.gameSound.play(); 

    this.mouse = new Mouse(this.canvas);
    this.cheese = new Cheese(this.canvas);

    const loop = () => {

        if (Math.random() < .025 ) {
            const yAxis = Math.floor(Math.random() * 2) * this.canvas.height/2.6+100;
            this.cats.push(new Cat(this.canvas, yAxis, this.level))
        }
        if (Math.random() < .025 ) {
            const yAxis = Math.floor(Math.random() * 2) * this.canvas.height/2.6+230;
            this.traps.push(new Trap(this.canvas, yAxis, this.level))
        }
        this.clearScreen();
        this.updateScreen();
        this.renderScreen();
        this.checkCatCollisions();
        this.checkTrapCollisions();
        this.checkCheeseCollisions();
        if (this.gameOver === false)
        if (!this.gameOver) {
            window.requestAnimationFrame(loop);
        }
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
    this.traps.forEach(function(trap) {
        trap.update();
    });
}


Game.prototype.renderScreen = function () {
    this.mouse.render();
    this.cheese.render();
    this.cats.forEach(function(cat) {
        cat.render()
    })
    this.traps.forEach(function(trap) {
        trap.render()
    })
}


Game.prototype.checkCatCollisions = function() {
    this.cats.forEach((cat, index ) =>  {
        const isColliding = this.mouse.checkCollisionWithCat(cat);
        if (isColliding){
            this.cats.splice(index,1);
            this.mouse.setLives();
            this.catSound.play();
            document.querySelector('#livesInfo').innerHTML = "LIVES: " + this.mouse.lives;
            console.log('Collision detected, Mouse has now ',this.mouse.lives + ' lives')
            if (this.mouse.lives === 0){
                this.gameOver = true;
                this.buildGameOverScreen();
                this.gameSound.pause();
                this.gameOverSound.play();
                console.log('gameOver')
            }
        }
    })
}

Game.prototype.checkTrapCollisions = function() {
    this.traps.forEach((trap, index ) =>  {
        const isColliding = this.mouse.checkCollisionWithTrap(trap);
        if (isColliding){
            this.traps.splice(index,1);
            this.mouse.setLives();
            document.querySelector('#livesInfo').innerHTML = "LIVES: " + this.mouse.lives;
            console.log('Collision detected, Mouse has now ',this.mouse.lives + ' lives')
            if (this.mouse.lives === 0){
                this.gameOver = true;
                this.buildGameOverScreen();
                this.gameSound.pause();
                this.gameOverSound.play();
                console.log('gameOver')
            }
        }
    })
}


Game.prototype.checkCheeseCollisions = function() {
    const isTrapColliding = this.mouse.checkCollisionWithCheese(this.cheese);
    if (isTrapColliding){
        this.winSound.play();
        this.level += 1;
        this.cats = [];
        this.traps = [];
        document.querySelector('#levelInfo').innerHTML = "LEVEL: " + this.level;
        console.log('Game level: ' + this.level);
        this.setNextLevelCallback();
        console.log('Mission Accomplished');
        console.log('Next Level');
    }
}


Game.prototype.setGameOverCallback = function(buildGameOverScreen) {
    this.buildGameOverScreen = buildGameOverScreen;
}


Game.prototype.setNextLevelCallback = function() {
    this.cheese = new Cheese(this.canvas);
    this.mouse = new Mouse(this.canvas);
    this.gameSound.loop = true;
    this.gameSound.play(); 
}
