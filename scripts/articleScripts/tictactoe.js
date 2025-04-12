const Player = function(name) {
	let marker;
	if(name == "Player 1") {
		marker = "X";
	}
	else if (name == "Player 2") {
		marker = "O";
	}

	return { name, marker };
};

const Gameboard = (function() {
	const board = [
		["","",""],
		["","",""],
		["","",""]
	];

	const getBoard = () => board;
	const checkWin = () => {
		// rows
		for(let i = 0; i <= 2; i++) {
			if(board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
				if(board[i][0] === "X") {
					console.log("Player 1 wins!");
					return "Player 1 victory";
				}
				else if(board[i][0] === "O") {
					console.log("Player 2 wins!");
					return "Player 2 victory";
				}
			}
		}
		// columns
		for(let i = 0; i <= 2; i++) {
			if(board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
				if(board[0][i] === "X") {
					console.log("Player 1 wins!");
					return "Player 1 victory";
				}
				else if(board[0][i] === "O") {
					console.log("Player 2 wins!");
					return "Player 2 victory";
				}
			}
		}
		// diagonal
		if(board[0][0] === board[1][1] && board[1][1] === board[2][2] || board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
			if(board[1][1] === "X") {
				console.log("Player 1 wins!");
				return "Player 1 victory";
			}
			else if(board[1][1] === "O") {
				console.log("Player 2 wins!");
				return "Player 2 victory";
			}
		}
	}
	const checkDraw = () => {
		let markerCount = 0;
		for(let i = 0; i <= 2; i++) {
			for(let j = 0; j <= 2; j++) {
				if(board[i][j] === "X" || board[i][j] === "O") markerCount++;
			}
		}
		if(markerCount === 9) {
			Gameboard.clearBoard();
			return true;
		}
		else return false;
	}
	const checkValidMove = (x, y) => {
		if(board[y][x] !== "") {
			return false;
		}
		return true;
	}
	const placeMarker = function(x, y, player) {
		board[y][x] = `${player.marker}`;
	}
	const clearBoard = function() {
		for(let i = 0; i < 3; i++) {
			for(let j = 0; j < 3; j++) {
				board[i][j] = "";
			}
		}
	}


	return { getBoard, checkWin, checkDraw, checkValidMove, placeMarker, clearBoard };
})();

const Game = (function() {
	let playerOne = Player("Player 1");
	let p1score = 0;
	let playerTwo = Player("Player 2");
	let p2score = 0;
	const currentBoard = Gameboard.getBoard();
	let turn = 0;
	const playRound = (x, y) => {
		if(turn % 2 === 0) {
			let validMove = Gameboard.checkValidMove(x, y);
			if(validMove === false) {
				console.log("Invalid move!");
				return "Invalid move";
			}
			turn++;
			Gameboard.placeMarker(x, y, playerOne);
			let result = Gameboard.checkWin();
			if(result === "Player 1 victory") {
				console.log("Congratulations player 1!")
				Gameboard.clearBoard();
				turn = 0;
				p1score++;
				return result;
			}
			let draw = Gameboard.checkDraw();
			if(draw === true)
			return true;
		}
		else if(turn % 2 !== 0) {
			let validMove = Gameboard.checkValidMove(x, y);
			if(validMove === false) {
				console.log("Invalid move!");
				return "Invalid move";
			}
			turn++;
			Gameboard.placeMarker(x, y, playerTwo);
			let result = Gameboard.checkWin();
			if(result === "Player 2 victory") {
				console.log("Congratulations player 2!")
				Gameboard.clearBoard();
				turn = 0;
				p2score++;
				return result;
			}
			Gameboard.checkDraw();
			return;
		}
	}
	const getTurn = () => {
		return turn;
	}
	const getPlayerScores = () => {
		return {
			p1: p1score,
			p2: p2score
		}
	}

	return { currentBoard, playRound, getTurn, getPlayerScores }
})();

const drawBoard = (function() {
	let changeNameDiv = document.querySelector("#changeName");
	changeNameDiv.style.display = "flex";
	changeNameDiv.style.justifyContent = "space-between";

	let nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.style.width = "8rem";
	nameInput.maxLength = "15"

	let changeNameButton = document.createElement("button");
	changeNameButton.textContent = "player 1 - change name";
	changeNameButton.style.backgroundColor = "var(--secondary)";
	changeNameButton.style.color = "var(--primary)";
	changeNameButton.style.width = "10rem";

	let divOne = document.querySelector("#one");
	divOne.style.display = "flex";
	divOne.style.flexDirection = "column";
	divOne.style.alignItems = "center";
	divOne.style.gap = ".5rem";
	divOne.appendChild(nameInput);
	divOne.appendChild(changeNameButton);
	let p1;
	let displayP1name = document.createElement("div");
	changeNameButton.addEventListener("click", () => {
		p1name = nameInput.value;
		p1 = p1name;
		displayP1name.textContent = p1name;
		divOne.appendChild(displayP1name);
	});

	let status = document.createElement("div");
	status.textContent = "Start playing!";
	three.appendChild(status);

	let nameInputTwo = document.createElement("input");
	nameInputTwo.type = "text";
	nameInputTwo.style.width = "8rem";
	nameInputTwo.maxLength = "15"

	let changeNameButtonTwo = document.createElement("button");
	changeNameButtonTwo.textContent = "player 2 - change name";
	changeNameButtonTwo.style.backgroundColor = "var(--secondary)";
	changeNameButtonTwo.style.color = "var(--primary)";
	changeNameButtonTwo.style.width = "10rem";

	let divTwo = document.querySelector("#two");
	divTwo.style.display = "flex";
	divTwo.style.flexDirection = "column";
	divTwo.style.gap = ".5rem";
	divTwo.style.alignItems = "center";
	divTwo.appendChild(nameInputTwo);
	divTwo.appendChild(changeNameButtonTwo);
	let p2;
	let displayP2name = document.createElement("div");
	changeNameButtonTwo.addEventListener("click", () => {
		p2name = nameInputTwo.value;
		p2 = p2name;
		displayP2name.textContent = p2name;
		divTwo.appendChild(displayP2name);
	});

	if(p1 === undefined) {
		p1 = "Player 1"
	}
	if(p2 === undefined) {
		p2 = "Player 2"
	}

	let scoreboard = document.querySelector("#scoreboard");
	scoreboard.style.height = "5rem";
	scoreboard.style.width = "50%";
	scoreboard.style.margin = "0 auto";
	scoreboard.style.marginBottom = "1rem";
	scoreboard.style.border = "3px ridge var(--accentOne)";
	scoreboard.style.display = "flex";
	scoreboard.style.justifyContent = "space-around"
	scoreboard.style.alignItems = "center";

	let scoreOne = document.createElement("div");
	scoreOne.style.width = "20%";
	scoreOne.style.height = "80%";
	scoreOne.style.border = "3px solid var(--accentTwo)"
	scoreOne.style.display = "flex";
	scoreOne.style.justifyContent = "center";
	scoreOne.style.alignItems = "center";
	scoreOne.style.fontSize = "2rem";

	let scoreTwo = document.createElement("div");
	scoreTwo.style.width = "20%";
	scoreTwo.style.height = "80%";
	scoreTwo.style.border = "3px solid var(--accentTwo)"
	scoreTwo.style.display = "flex";
	scoreTwo.style.justifyContent = "center";
	scoreTwo.style.alignItems = "center";
	scoreTwo.style.fontSize = "2rem";

	let scores = Game.getPlayerScores();
	scoreOne.textContent = scores.p1;
	scoreTwo.textContent = scores.p2;

	scoreboard.appendChild(scoreOne);
	scoreboard.appendChild(scoreTwo);

	let container = document.querySelector("#tictactoe");
	container.style.display = "grid";
	container.style.gridTemplateColumns = "1fr 1fr 1fr";
	container.style.gridTemplateRows = "1fr 1fr 1fr";
	container.style.height = "20rem";
	container.style.width = "80%";
	container.style.margin = "0 auto";
	for(let i = 0; i < 3; i++) {
		let button = document.createElement("button");
		container.appendChild(button);
		button.style.border = "none"
		button.style.borderBottom = "4px solid var(--accentOne)"
		if(i === 0 || i === 1) {
			button.style.borderRight = "4px solid var(--accentOne)"
		}
	}
	for(let i = 0; i < 3; i++) {
		let button = document.createElement("button");
		container.appendChild(button);
		button.style.border = "none"
		button.style.borderBottom = "4px solid var(--accentOne)"
		if(i === 0 || i === 1) {
			button.style.borderRight = "4px solid var(--accentOne)"
		}
	}
	for(let i = 0; i < 3; i++) {
		let button = document.createElement("button");
		container.appendChild(button);
		button.style.border = "none"
		if(i === 0 || i === 1) {
			button.style.borderRight = "4px solid var(--accentOne)"
		}
	}
	const tictactoe = document.querySelector("#tictactoe");
	let buttons = tictactoe.querySelectorAll("button");
	for(let i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor = "var(--primary)"
		buttons[i].addEventListener("mouseenter", () => {
			buttons[i].style.backgroundColor = "var(--secondary)";
			buttons[i].style.color = "var(--primary)";
		});
		buttons[i].addEventListener("mouseleave", () => {
			buttons[i].style.backgroundColor = "var(--primary)";
			buttons[i].style.color = "var(--secondary)";
		});
		buttons[i].setAttribute("id", `button${i}`)
	}
	for(let i = 0; i < 3; i++) {
		document.getElementById(`button${i}`).addEventListener("click", () => {
			let checkForRefresh = Game.playRound(0, i);
			if(checkForRefresh === true) {
				for(let button of buttons) {
					button.textContent = "";
				}
				let scores = Game.getPlayerScores();
				scoreOne.textContent = scores.p1;
				scoreTwo.textContent = scores.p2;
				status.textContent = "Draw!";
				return;
			}
			if(checkForRefresh === "Invalid move") {
				return;
			}
			turn = Game.getTurn();
			if(turn % 2 !== 0) {
				document.getElementById(`button${i}`).textContent = "X";
				console.log(`turn ${turn}`);
			}
			else {
				document.getElementById(`button${i}`).textContent = "O";
				console.log(`turn ${turn}`);
			}
			if(checkForRefresh === "Player 1 victory" || checkForRefresh === "Player 2 victory") {
				for(let button of buttons) {
					button.textContent = "";
				}
				if(checkForRefresh === "Player 1 victory") status.textContent = `${p1} wins!`;
				else if (checkForRefresh === "Player 2 victory") status.textContent = `${p2} wins!`;
				let scores = Game.getPlayerScores();
				scoreOne.textContent = scores.p1;
				scoreTwo.textContent = scores.p2;
			}
		});
	}
	for(let i = 3; i < 6; i++) {
		document.getElementById(`button${i}`).addEventListener("click", () => {
			let checkForRefresh = Game.playRound(1, i-3);
			if(checkForRefresh === true) {
				for(let button of buttons) {
					button.textContent = "";
				}
				let scores = Game.getPlayerScores();
				scoreOne.textContent = scores.p1;
				scoreTwo.textContent = scores.p2;
				status.textContent = "Draw!";
				return;
			}
			if(checkForRefresh === "Invalid move") {
				return;
			}
			turn = Game.getTurn();
			if(turn % 2 !== 0) {
				document.getElementById(`button${i}`).textContent = "X";
				console.log(`turn ${turn}`);
			}
			else {
				document.getElementById(`button${i}`).textContent = "O";
				console.log(`turn ${turn}`);
			}
			if(checkForRefresh === "Player 1 victory" || checkForRefresh === "Player 2 victory") {
				for(let button of buttons) {
					button.textContent = "";
				}
				if(checkForRefresh === "Player 1 victory") status.textContent = `${p1} wins!`;
				else if (checkForRefresh === "Player 2 victory") status.textContent = `${p2} wins!`;
				let scores = Game.getPlayerScores();
				scoreOne.textContent = scores.p1;
				scoreTwo.textContent = scores.p2;
			}
		});
	}
	for(let i = 6; i < 9; i++) {
		document.getElementById(`button${i}`).addEventListener("click", () => {
			let checkForRefresh = Game.playRound(2, i-6);
			if(checkForRefresh === true) {
				for(let button of buttons) {
					button.textContent = "";
				}
				let scores = Game.getPlayerScores();
				scoreOne.textContent = scores.p1;
				scoreTwo.textContent = scores.p2;
				status.textContent = "Draw!";
				return;
			}
			if(checkForRefresh === "Invalid move") {
				return;
			}
			turn = Game.getTurn();
			if(turn % 2 !== 0) {
				document.getElementById(`button${i}`).textContent = "X";
				console.log(`turn ${turn}`);
			}
			else if(turn % 2 === 0) {
				document.getElementById(`button${i}`).textContent = "O";
				console.log(`turn ${turn}`);
			}
			if(checkForRefresh === "Player 1 victory" || checkForRefresh === "Player 2 victory") {
				for(let button of buttons) {
					button.textContent = "";
				}
				if(checkForRefresh === "Player 1 victory") status.textContent = `${p1} wins!`;
				else if (checkForRefresh === "Player 2 victory") status.textContent = `${p2} wins!`;
				let scores = Game.getPlayerScores();
				scoreOne.textContent = scores.p1;
				scoreTwo.textContent = scores.p2;
			}
		});
	}

	
	
})();