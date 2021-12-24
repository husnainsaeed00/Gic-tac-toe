const statusDisplay = document.querySelector('.game-status');

let gameActive = true;

let currentPlayer = "X";

let gameState = ["","","","","","",""];

const winningMessage = () => `Player ${currentPlayer} has won!`;

const drawMessage = () => `Game inded in a draw`;

const currentPlayerTurn = () => `its ${currentPlayer}'s turn`;