/*----- constants -----*/
let player1 = "O";
let player2 = "X";
let currentTurn = player1;


// whoseTurn.innerText = ""

/*----- app's state (variables) -----*/



/*----- cached element references -----*/

// access all the cell divs from html under div grid
let cells = document.querySelectorAll(".cell");
// change the divs from being in a list to an array[]
cells = Array.from(cells)



/*----- functions -----*/
cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        alert("it wrks")
    })
})
