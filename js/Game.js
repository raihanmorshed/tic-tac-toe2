export default class Game {

    constructor() {
        console.log("init game");
        this.turn = "X";
        this.board =  new Array(9).fill(null);
        console.log(this.board);
    }

    nextTurn() {
        if(this.turn == "X") {
            this.turn = "O";
        } else {
            this.turn = "O";
        }
    }

    makeMove(i) {
        if (this.board[i]){
            return;
        }
        this.board[i] = this.turn; //X or O
    }








}