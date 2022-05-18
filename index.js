const container = document.querySelector("#container");
let rows = document.getElementsByClassName("gridRow");
// let cells = document.getElementsByClassName("cell");
let button = document.querySelector("button")
// Creates a default grid sized 16x16
function defaultGrid(num) {
    makeRows(num);
    makeColumns(num);
}
let counter = 0;

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";            
            newCell.addEventListener("mouseover", function( event ) {
                // highlight the mouseenter target
                event.target.style.backgroundColor = "purple";
            })
        };
    };
};



button.addEventListener("click" ,function (event){
    container.innerHTML = ''
    console.log(counter)
    event = prompt("How many squares?")
    if (event >= 100) {
        alert ("MUST BE LESS")
    } else if (event < 100) {
        defaultGrid(event)
    }
})


// container.addEventListener("mouseout", function( event ) {
//     // highlight the mouseenter target
//     event.target.style.backgroundColor = "white";
// })



defaultGrid()