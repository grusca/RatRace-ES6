'use strict'
console.log('main');
function main () {

    const mainElement = document.querySelector('main');

    function buildDom(html) {
        mainElement.innerHTML = html;
        return mainElement;
    }


    function buildSplashScreen () {
        const splashScreen = buildDom(`
            <section class='splash'>
                <h1>Mouse Trap</h1>
                <img src='img/cheese.png' alt=cheese height= "200px" width=auto"> 
                <button class="start-button">Start</button>
                <audio id='gameSound' src="./sounds/gameSound.wav"></audio>
            </section>
            `);

        const startButton = document.querySelector('.start-button');
        
        startButton.addEventListener('click', buildGameScreen);
    }
    
      function buildGameScreen () {
        /*var gameSound = new Audio ("sounds/gameSound.wav")
        gameSound.loop = true;
        gameSound.play(); */
        const gameScreen = buildDom(`
        <section class="game-container">
            <canvas>
            </canvas>
        </section>
        `);

        const gameContainerElement = document.querySelector('.game-container')

        const width = gameContainerElement.offsetWidth;
        const height = gameContainerElement.offsetHeight;

        const canvasElement = document.querySelector('canvas');
        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);


        const game = new Game(canvasElement);
        game.startLoop();
        game.setGameOverCallback(buildGameOverScreen);
        game.setNextLevelCallback(buildNextLevelScreen);

        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 38) {
                game.mouse.setyDirection(-1)
            } else if (event.keyCode === 40) {
                game.mouse.setyDirection(1)
            } else if (event.keyCode === 37) {
                game.mouse.setxDirection(-1) 
            } else if (event.keyCode === 39) {
                game.mouse.setxDirection(1)
            }
         })
    
        document.addEventListener('keyup', function(event){
            if(event.keyCode === 38 || event.keyCode === 40 || event.keyCode === 37 || event.keyCode === 39 ) {
                game.mouse.setyDirection(0);
                game.mouse.setxDirection(0);
            }
        })
    }


    function buildGameOverScreen() {
        const gameOverScreen = buildDom(`
            <section>
                <h1>Looser</h1>
                <p>Don't Let the Cat Catch You</p>
                <button class="restart-button">Try Again</button>
            </section>
        `)

        const restartButton = document.querySelector('.restart-button')
        
        restartButton.addEventListener ('click', buildGameScreen);
    }

    function buildNextLevelScreen() {
        const nextLevelScreen = buildDom(`
            <section class="nextLevel">
                <h1>Good Job</h1>
                <p>Ready for next level?</p>
                <button class="restart-button">Next Level</button>
            </section>
        `)

        const restartButton = document.querySelector('.restart-button')
        
        restartButton.addEventListener ('click', buildGameScreen);
    }
    

    buildSplashScreen();
}
window.addEventListener('load', main)