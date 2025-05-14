"use strict";

const gridContainer = document.querySelector(".grid-container");
const gameSection = document.querySelector(".game-section");
const gridDiv = document.querySelectorAll(".grid-div");
const resizeButton = document.querySelector(".button");

const numOfSquares = 8;
const totalSquares = numOfSquares * numOfSquares;
let dimensions = String(getDimensions(numOfSquares)) + "px";

function getDimensions(numOfSquares) {
    return 640 / numOfSquares;
}

// Function for creating the grid div:
function createGridDiv(dimension) {
    // This is a local gridDiv variable (not accessible out of function, therefore there is a global variable for all gridDivs)
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    gridDiv.classList.add(".grid-div:hover");
    gridDiv.style.width = dimension;
    gridDiv.style.height = dimension;
    gridContainer.appendChild(gridDiv);
}

function createResizeButton() {
    const resizeButton = document.createElement("button");
    resizeButton.classList.add("button");
    resizeButton.textContent = "Resize Grid";
    resizeButton.style.marginBottom = "30px";
    resizeButton.style.padding = "10px, 30px";
    resizeButton.style.fontSize = "20px";
    gameSection.insertBefore(resizeButton, gridContainer);
}

// Loop to create the entire game grid:
for (let i = 0; i < totalSquares; i++) {
    createGridDiv(dimensions);
}

createResizeButton();
