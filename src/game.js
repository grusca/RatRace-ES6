'use strict'

class Game {
    constructor (canvas) {
        this.mouse = null;
        this.cats = [];
        this.traps = [];
        this.powerUp = [];
        this.poisons = [];
        this.cheese = null;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.gameOver = false;
        this.gameSound = new Audio ("sounds/gameSound.wav")
        this.catSound = new Audio ("sounds/catSound.wav")
        this.trapSound = new Audio ("sounds/trapSound.wav")
        this.winSound = new Audio ("sounds/winSound.wav")
        this.gameOverSound = new Audio ("sounds/loseSound.wav")
        this.powerupSound = new Audio ("sounds/powerUp.wav")
        this.poisonSound = new Audio ("sounds/poison.wav")
        this.level = 1;
    }

    startLoop = function () {

        this.gameSound.loop = true;
        this.gameSound.play(); 

        this.mouse = new Mouse(this.canvas);
        this.cheese = new Cheese(this.canvas);

        const loop = () => {

            if (Math.random() < (.03 + this.level/100) ) {
                const yAxis = Math.floor(Math.random() * 2) * this.canvas.height/2.5+100;
                this.cats.push(new Cat(this.canvas, yAxis, this.level))
            }
            if (Math.random() < (.03 + this.level/100) ) {
                const yAxis = Math.floor(Math.random() * 2) * this.canvas.height/2.5+255;
                this.traps.push(new Trap(this.canvas, yAxis, this.level))
            }
            if (Math.random() < (.004) ) {
                const yAxis = Math.floor(Math.random() * 10) * this.canvas.height/10+100;
                this.powerUp.push(new Power(this.canvas, yAxis, this.level))
            }
            if (Math.random() < (.005) ) {
                const yAxis = Math.floor(Math.random() * 2) * this.canvas.height/2.5+180;
                this.poisons.push(new Poison(this.canvas, yAxis, this.level))
            }
            this.clearScreen();
            this.updateScreen();
            this.renderScreen();
            this.checkCatCollisions();
            this.checkTrapCollisions();
            this.checkCheeseCollisions();
            this.checkPowerCollisions();
            this.checkPoisonCollisions();
            if (this.gameOver === false)
            if (!this.gameOver) {
                window.requestAnimationFrame(loop);
            }
        }
        window.requestAnimationFrame(loop);
    }

    clearScreen = function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    updateScreen = function
    () {
        this.mouse.update();
        this.cheese.update();
        this.cats.forEach(function(cat) {
            cat.update();
        });
        this.traps.forEach(function(trap) {
            trap.update();
        });
        this.powerUp.forEach(function(power) {
            power.update();
        });
        this.poisons.forEach(function(poison) {
            poison.update();
        });
    }


    renderScreen = function () {
        this.mouse.render();
        this.cheese.render();
        this.cats.forEach(function(cat) {
            cat.render()
        })
        this.traps.forEach(function(trap) {
            trap.render()
        })
        this.powerUp.forEach(function(power) {
            power.render()
        })
        this.poisons.forEach(function(poison) {
            poison.render()
        })
    }


    checkCatCollisions = function() {
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

    checkTrapCollisions = function() {
        this.traps.forEach((trap, index ) =>  {
            const isColliding = this.mouse.checkCollisionWithTrap(trap);
            if (isColliding){
                this.traps.splice(index,1);
                this.mouse.setLives();
                this.trapSound.play();
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

    checkCheeseCollisions = function() {
        const isTrapColliding = this.mouse.checkCollisionWithCheese(this.cheese);
        if (isTrapColliding){
            this.winSound.play();
            this.level += 1;
            //this.cats = [];
            //this.traps = [];
            document.querySelector('#levelInfo').innerHTML = "LEVEL: " + this.level;
            console.log('Game level: ' + this.level);
            this.setNextLevelCallback();
            console.log('Mission Accomplished');
            console.log('Next Level');
        }
    }

    checkPowerCollisions = function() {
        this.powerUp.forEach((power, index ) =>  {
            const isColliding = this.mouse.checkCollisionWithPower(power);
            if (isColliding){
                this.powerUp.splice(index,1);
                this.powerupSound.play();
                this.mouse.speed = this.mouse.speed + 6;
                document.querySelector('#livesInfo').innerHTML = "LIVES: " + this.mouse.lives;
                console.log('Collision detected, Mouse has now ',this.mouse.lives + ' lives')
            }
        })
    }

    checkPoisonCollisions = function() {
        this.poisons.forEach((poison, index ) =>  {
            const isColliding = this.mouse.checkCollisionWithPoison(poison);
            if (isColliding){
                this.poisons.splice(index,1);
                this.poisonSound.play();
                this.mouse.speed -= this.mouse.speed - 3;
                this.mouse.size = this.mouse.size / 1.4;
                document.querySelector('#livesInfo').innerHTML = "LIVES: " + this.mouse.lives;
                console.log('Collision detected, Mouse has now ',this.mouse.lives + ' lives')
            }
        })
    }

    setGameOverCallback = function(buildGameOverScreen) {
        this.buildGameOverScreen = buildGameOverScreen;
    }

    setNextLevelCallback = function() {
        this.cheese = new Cheese(this.canvas);
        this.mouse = new Mouse(this.canvas);
        this.gameSound.loop = true;
        this.gameSound.play(); 
    }

}
