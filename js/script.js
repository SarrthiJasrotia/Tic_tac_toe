/*----- constants -----*/
const player1 = "O";
const player2 = "X";
let currentPlayer = player1;





/*----- cached element references -----*/

// access all the cell divs from html under div grid
let cells = document.querySelectorAll(".cell");
// change the divs from being in a list to an array[]
cellArray = Array.from(cells)




/*----- functions -----*/
cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        cell.innerHTML = (currentPlayer)
        currentPlayer = currentPlayer = currentPlayer == player1 ? player2 : player1;
        document.getElementById("turnTxt").innerText = "It is " + currentPlayer + "'s turn"

    })
})
