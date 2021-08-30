const cells = document.querySelectorAll(".cell");
const display = document.querySelector("#display");
let currentPlayer = "Player-X";
display.innerHTML = currentPlayer;
cells.forEach((cell) => {
    cell.addEventListener("click", outCome);
});

function outCome(e) {
    const cellArray = Array.from(cells);
    const index = cellArray.indexOf(e.target);

    if (currentPlayer === "Player-X") {
        currentPlayer = "Player-O";
        cells[index].classList.add("PlayerX");
    } else {
        cells[index].classList.add("PlayerO");
        currentPlayer = "Player-X";
    }
    display.innerHTML = currentPlayer;
}