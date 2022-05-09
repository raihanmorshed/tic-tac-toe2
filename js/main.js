import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

console.log(game.board);
console.log("my turn is " + game.turn);
game.nextTurn();
console.log("my turn is " + game.turn);
game.nextTurn();
console.log("my turn is " + game.turn);
game.nextTurn();
game.makeMove(4);
console.log(game.board);

