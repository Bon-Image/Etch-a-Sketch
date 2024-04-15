initialize()

function initialize(numberSquares = 16) {

    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    body.appendChild(container);

    makeGrid(numberSquares) // Creates a Default sketch pad, before users insert thier desirable size. 

    const sideLength = 500 / numberSquares; // Side length of each squar. 
    console.log(sideLength)
    let squares = document.getElementsByClassName("s");

    for (i = 0; i < squares.length; i++) {

        squares[i].style.height = `${sideLength}px`;
        squares[i].style.width = `${sideLength}px`;

    }


    // Add an Event Listener to the main container, we are doing Event-Delegation.
    container.addEventListener("mouseout", changeColor)

}

function makeGrid(numberSquares = 16) {

    // Because we need horizontal containers to accomodate square cells. There are rows in out grid. 
    for (j = 0; j < numberSquares; j++) {
        let row = document.createElement("div")
        row.classList.add("r");

        // Creation of a single square and appending it to the current horizontal container.  
        for (let i = 0; i < numberSquares; i++) {
            let squar = document.createElement("div");
            squar.classList.add("s");
            row.appendChild(squar);
        }

        // We filled the current row with squares, now we have to do the same again for the rest. 
        container.appendChild(row);
    }
}

// After mouse leavse each squar, we change the color of that square. 
function changeColor(event) {

    if (event.target.classList.contains("s")) {
        event.target.style.backgroundColor = "green";
    }
}

// We give the user a chance to start the sketch. 
const size = document.querySelector("button");
size.textContent = "Choose the Sketch Size Please"

size.addEventListener("click", () => {
    numberSquares = prompt("Enter the number of squares per side: ")
    removeGrid();
    initialize(numberSquares)
})

function removeGrid() {
    container.remove()
}