# MOUSE TRAP

## 

## Description

Help the mouse get his cheese in this interactive game. Avoid the cats coming from both sides who are trying to catching you. Each time yo get the cheese, you enter the next level were the difficulty increases. You can travel forward, backwards, left, and right. Good luck!

## 

## MVP (CANVAS)

- Canvas setup
- Player: Mouse 
- Enemies: Cats
- Reward: Cheese
- Keycode movements
- Character sprites
- Display lives

## 

## Backlog

- Background music and sounds
- Time tracker
- Additional level with more speed
- Additional levels with cats coming from the front
- Additional level with poisoned cheese
- Mouse speed up feauture

## 

## Data structure

### main.js

```js
function main () {
  
  function buildDom (){
  }

  function buildSplashScreen () {
  }

  function buildGameScreen () {
	}

  function buildGameoverScreen () {
  }
  
}
```



### game.js

```js
function Game(){
  this.canvas;
  this.ctx;
  this.player
  this.enemies
  this.gameOver
}


Game.prototype.startLoop = function() {
}

Game.prototype.clearCanvas = function() {
}

Game.prototype.updateCanvas = function() {
}

Game.prototype.drawCanvas = function() {
}

Game.prototype.checkCollisons = function () {
}

Game.prototype.gameOverCallback = function () {
}

Mouse.prototype.gameOver = function() {
}

Mouse.prototype.nextLevel = function() {
}
```

### 

### mouse.js

```js
Mouse() {
  this.lives;
  this.speed;
  this.direction;
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
}

Mouse.prototype.render = function() {
}

Mouse.prototype.update = function() {
}

Mouse.prototype.setDirection = function() {
}

Mouse.prototype.setLives = function() {
}

Mouse.prototype.checkCollisionWithCat = function() {
}

Mouse.prototype.checkCollisionWithCheese = function() {
}
```

### 

### cats.js

```js
Cat(){
  this.speed;
  this.direction;
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
}

Cats.prototype.render = function () {
}

Cats.prototype.updatePosition = function() {
}
```



## cheese.js

```js
Cheese(){
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
}

Cheese.prototype.render = function() {
}

Cheese.prototype.updatePosition = function() {
}


```



## States y States Transitions

```
- splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  
  
- gameScreen()
  - create new Game()
  - game.start()
  
  
- gameOverScreen()
  - buildGameOver()
  - addEventListener( if splashScreen, else startGame) 
```

## 

## Task

- Canvas setup

- MAIN - buildDom

- MAIN - Build Splash Screen

- MAIN - Build Game Screen

- MAIN - Build Game Over Screen

- MAIN - addEventListener

- MAIN - 3 states transitions

- MAIN - GameWon

- GAME - Create startLoop

- GAME -  Test loop

- GAME - Create clearCanvas

- GAME - Create updateCanvas

- GAME - Create drawCanvas

- MOUSE - Create render

- MOUSE - Create updatePosition

- MOUSE - Create setDirection

- CATS - Create render

- CATS - Create updatePosition

- CHEESE - Create render

- CHEESE - Create updatePosition

- MOUSE - Create checkCollisionWithCat

- MOUSE - Create setLives

- MOUSE - Create checkCollisionWithCheese

- GAME - Create checkCollissions

- GAME - Create checkWin

  

## Links

### Trello

[Link url](https://trello.com)

### Git

URls for the project repo and deploy [Link Repo](https://github.com/Gabriel0liver/skull-jumper) [Link Deploy](https://Gabriel0liver.github.io/skull-jumper/)

### Slides

URls for the project presentation (slides) [Link Slides.com](http://slides.com)