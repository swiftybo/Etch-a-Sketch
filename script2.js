"use strict";

// Elements

// sections:
const gameSection = document.querySelector(".game-section");

// containers:
const containerGrid = document.querySelector(".grid-container");

// Game Parts:
let gridDiv;

// Constants
const gridContainerWidth = 640;

// Functions

function createGridDiv() {
    gridDiv = document.createElement("div");
    containerGrid.appendChild(gridDiv);
    gridDiv.classList.add("grid-div");
}

for (let i = 0; i < 256; i++) {
    createGridDiv();
}
