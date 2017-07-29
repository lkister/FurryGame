var Game = require("./game.js");

var startButton = document.querySelector('.start-button');
startButton.addEventListener('click', function(e) {
    var startPanel = document.querySelector('#game-start');
    var score = document.querySelector('#score');
    var board = document.querySelector('#board');
    startPanel.classList.add("invisible");
    score.classList.remove("invisible");
    board.classList.remove("invisible");

    var game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();
    document.addEventListener('keydown', function(event) {
        game.turnFurry(event);
    });

});
