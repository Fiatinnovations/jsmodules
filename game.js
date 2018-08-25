class Game{
    constructor(numberOfRows, numberOfColumns, numberOfBombs){
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

playMove(rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex);
        if(this._board.playerBoard[rowIndex][columnIndex] === 'B'){
        console.log('Game Over');
        this._board.print();
    }   else if (this._board.noMoreFlipTiles()) {
        return ('you won');
    }   else {
        console.log('Current Board : ');
        return this._board.print();
    }
  }
}






/*
let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 2);*/

g = new Game(4,5,9);
g.playMove(2,2);






/*
console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board: ');
printBoard(playerBoard);

flipTile(playerBoard, bombBoard, 0, 1);
console.log('Updated Player Board: ');
printBoard(playerBoard);*/
