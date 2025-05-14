"use strict";

const gridContainer = document.querySelector(".grid-container");
const gameSection = document.querySelector(".game-section");
const gridDiv = document.querySelectorAll(".grid-div");
const resizeButton = document.querySelector(".button");
const colourContainer = document.querySelector(".colour-container");

const defaultNumOfSquares = 16;
const defaultTotalSquares = defaultNumOfSquares * defaultNumOfSquares;
let dimensions = getDimensions(defaultNumOfSquares);
createGameGrid(defaultTotalSquares, dimensions);
createResizeButton();
createColourContainer();
createPenColourButton("red");

// Function to create the entire game grid:
function createGameGrid(totalsquares, measurements) {
    for (let i = 0; i < totalsquares; i++) {
        createGridDiv(measurements);
    }
}

// Function for getting dimensions of grid square (returned as a string in pixels):
function getDimensions(numOfSquares) {
    return String(640 / numOfSquares) + "px";
}

// Function for creating the grid div:
function createGridDiv(dimension) {
    // This is a local gridDiv variable (not accessible out of function, therefore there is a global variable for all gridDivs)
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    gridDiv.classList.add(".grid-div-default:hover");
    gridDiv.style.width = dimension;
    gridDiv.style.height = dimension;
    gridContainer.appendChild(gridDiv);
}

// Function for creating resize button in DOM & assigning classes & event listener:
function createResizeButton() {
    const resizeButton = document.createElement("button");
    resizeButton.classList.add("button");
    resizeButton.textContent = "Resize Grid";
    resizeButton.style.marginBottom = "30px";
    resizeButton.style.padding = "10px, 30px";
    resizeButton.style.color = "navy";
    resizeButton.style.fontSize = "20px";
    gameSection.insertBefore(resizeButton, gridContainer);
    resizeButton.addEventListener("click", resizeGrid);
}

function resizeGrid() {
    const newNumOfSquares = prompt(
        "How many squares would you like along the sides?"
    );
    if (newNumOfSquares >= 100) {
        alert(
            "It is not recommended to have more than 100 squares across each side of the grid. Please try again and enter a lower number of squares."
        );
        return;
    } else if (newNumOfSquares < 4) {
        alert(
            "It is recommended to have at least 4 squares across each side of the grid. Please try again and enter a higher number of squares."
        );
        return;
    } else if (newNumOfSquares < 0) {
        alert(
            "It is impossible to create a grid with less than 0 squares. Please try again and enter a higher number of squares (between 4 - 100)."
        );
        return;
    } else {
        gridContainer.innerHTML = "";
        const newTotalSquares = newNumOfSquares * newNumOfSquares;
        const newDimensions = getDimensions(newNumOfSquares);
        createGameGrid(newTotalSquares, newDimensions);
    }
}

function createColourContainer() {
    const colourContainer = document.createElement("div");
    colourContainer.classList.add("colour-container");
    colourContainer.style.margin = "30px 0px 15px 0px";
    colourContainer.style.display = "flex";
    colourContainer.style.justifyContent = "center";
    colourContainer.textContent =
        "This is the colour section! Choose your colour of pen.";
    colourContainer.style.fontSize = "18px";
    gameSection.appendChild(colourContainer);
}

function createPenColourButton(colour) {
    const penColourButton = document.createElement("div");
    penColourButton.classList.add("penColourButton");
    penColourButton.style.backgroundColor = colour;
    gameSection.appendChild(penColourButton);

    penColourButton.addEventListener("click", function () {
        console.log(`You picked the colour ${colour}`);
    });
}
