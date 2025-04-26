console.log("Script loaded");

class Board {
  constructor() {
    this._board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.turn = 0;
  }

  get board() {
    return this._board;
  }

  checkResult() {
    // verticals
    for (let y = 0; y < 3; y++) {
      if (
        this._board[y][0] === this._board[y][1] &&
        this._board[y][1] === this._board[y][2]
      ) {
        if (this._board[y][0] === "X") {
          return "X";
        } else if (this._board[y][0] === "O") {
          return "O";
        }
      }
    }

    // horizontals
    for (let x = 0; x < 3; x++) {
      if (
        this._board[0][x] === this._board[1][x] &&
        this._board[1][x] === this._board[2][x]
      ) {
        if (this._board[0][x] === "X") {
          return "X";
        } else if (this._board[0][x] === "O") {
          return "O";
        }
      }
    }

    // diagonals
    if (
      (this._board[0][0] === this._board[1][1] &&
        this._board[1][1] === this.board[2][2]) ||
      (this._board[0][2] === this._board[1][1] &&
        this._board[1][1] === this.board[2][0])
    ) {
      if (this._board[1][1] === "X") {
        return "X";
      } else if (this._board[1][1] === "O") {
        return "O";
      }
    }

    // draw
    let counter = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this._board[i][j]) {
          ++counter;
        }
      }
    }
    if (counter === 9) {
      return "draw";
    } else {
      return "continue";
    }
  }

  placeMarker(posY, posX) {
    if (this._board[posY][posX]) {
      console.log("Invalid move!");
      return;
    }

    let marker = "";
    if (this.turn % 2 === 0) {
      marker = "X";
    } else if (this.turn % 2 !== 0) {
      marker = "O";
    }
    this.turn++;

    this._board[posY][posX] = marker;

    const result = this.checkResult();
    if (result === "X") {
      console.log("X wins!");
      newGame();
    } else if (result === "O") {
      console.log("O wins!");
      newGame();
    } else if (result === "draw") {
      console.log("Tie!");
      newGame();
    }
    return result;
  }
}

let gameboard = new Board();

function newGame() {
  gameboard = new Board();
}

// UI
let assignButtons = (function () {
  let buttons = document.querySelectorAll(".square");
  let announcement = document.querySelector("#announcement h3");

  let counter = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let index = counter;
      buttons[index].addEventListener("click", () => {
        let result = gameboard.placeMarker(i, j);
        if (buttons[index].textContent === "") {
          if (gameboard.turn % 2 === 0) buttons[index].textContent = "O";
          else buttons[index].textContent = "X";
        }

        if (result === "X") {
          announcement.textContent = `${document.querySelector("#p1name").textContent} wins!`;
          keepScore("X");
          clearBoard();
        } else if (result === "O") {
          announcement.textContent = `${document.querySelector("#p2name").textContent} wins!`;
          keepScore("O");
          clearBoard();
        } else if (result === "draw") {
          announcement.textContent = "We've got a draw!";
          clearBoard();
        }
        console.log(`${i} ${j}`);
      });
      counter++;
    }
  }
})();

function clearBoard() {
  let buttons = document.querySelectorAll(".square");

  for (let button of buttons) {
    button.textContent = "";
  }
}

function keepScore(winner) {
  let p1score = document.querySelector("#p1score").textContent;
  let p2score = document.querySelector("#p2score").textContent;

  if (winner === "X") {
    ++p1score;
    document.querySelector("#p1score").textContent = p1score;
  } else {
    ++p2score;
    document.querySelector("#p2score").textContent = p2score;
  }
}
