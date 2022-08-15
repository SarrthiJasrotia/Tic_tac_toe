/*----- constants -----*/
const player1 = "O";
const player2 = "X";
let currentPlayer = player1;





/*----- cached element references -----*/

// access all the cell divs from html under div grid
let cells = document.querySelectorAll(".cell");
// change the divs from being in a list to an array[]
cellArray = Array.from(cells)

let winCombos = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [2,4,6],
   [2,5,8],
   [0,4,8],
   [0,3,6],
   [1,4,7],
   [2,5,8] 

];




/*----- functions -----*/

// adding a event listner for each div and when the div is clicked the 
// function put a x or o depending on the turn which is decided by the condition on line 27
cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        cell.innerHTML = (currentPlayer)
        currentPlayer = currentPlayer = currentPlayer == player1 ? player2 : player1;
        document.getElementById("turnTxt").innerHTML = "It is " + currentPlayer + "'s turn"

    })
})


//check if the winning combos was true
cells.forEach(function clearCells(cell){
    cell.innerHTML = " "
    

});
