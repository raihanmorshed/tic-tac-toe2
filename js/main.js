import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();
// gameView.updateBoard(game);

document.querySelector(".restart")
.addEventListener("click", () => { 
    onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})


//make a move
//change turn
//update board, change the game view
function onTileClick(i){
    //do something
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onRestartClick(){
    game = new Game();
    gameView.updateBoard(game);
}




// console.log(game.board);
// console.log("my turn is " + game.turn);
// game.nextTurn();
// console.log("my turn is " + game.turn);
// game.nextTurn();
// console.log("my turn is " + game.turn);
// game.nextTurn();
// game.makeMove(4);
// console.log(game.board);
// gameView.updateBoard(game);
// gameView.updateBoard(game);
// gameView.updateBoard(game);
// game.nextTurn();
// gameView.updateBoard(game);