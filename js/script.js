/*----- constants -----*/
const player1 = "O";
const player2 = "X";
let currentPlayer = player1;


// whoseTurn.innerText = ""

/*----- app's state (variables) -----*/



/*----- cached element references -----*/

// access all the cell divs from html under div grid
let cells = document.querySelectorAll(".cell");
// change the divs from being in a list to an array[]
cells = Array.from(cells)

// let clearCells = document.getElementById('resetBtn');
// clearCells.onclick= reset();

/*----- functions -----*/
cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        cell.innerHTML = (currentPlayer)
        currentPlayer = currentPlayer = currentPlayer == player1 ? player2 : player1;

    })
})
