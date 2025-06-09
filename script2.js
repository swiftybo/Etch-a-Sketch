"use strict";

// Elements

// sections:
const gameSection = document.querySelector(".game_section");

// containers:
const containerGrid = document.querySelector(".grid_container");
let containerPaint;

// Game Parts:
let gridDiv;
let gridDivAll;
let resizeButton;
let paintColour = "yellow";

// Constants
const gridContainerWidth = 640;
let gridDivWidth = 40;

// Creating html elements

function createGridDiv() {
    gridDiv = document.createElement("div");
    containerGrid.appendChild(gridDiv);
    gridDiv.classList.add("grid_div");
    gridDiv.style.width = gridDivWidth + "px";
    gridDiv.style.height = gridDivWidth + "px";
}

function createGrid(divWidth) {
    const numSquares = (640 / divWidth) ** 2;
    for (let i = 0; i < numSquares; i++) {
        createGridDiv();
    }
}

// Creating the resize button and adding functionality
resizeButton = document.createElement("button");
gameSection.insertBefore(resizeButton, containerGrid);
resizeButton.classList.add("resize_Button");
resizeButton.textContent = "Resize Grid";

resizeButton.addEventListener("click", function () {
    const newGridSize = Math.round(
        prompt("What size for new grid? Please enter number in range 10 - 100")
    );
    // Math.round coerces the prompt into a Number data type.
    newGridSize < 10 || newGridSize > 100
        ? alert("Can you not read instructions?")
        : (gridDivWidth = 640 / newGridSize);
    console.log(gridDivWidth);
    updateUI();
});

// Creating paint section
containerPaint = document.createElement("div");
containerPaint.classList.add("paint_container");
gameSection.appendChild(containerPaint);

// Creating the paint colour buttons
function createPaintButton(colour) {
    const paintButton = document.createElement("button");
    paintButton.classList.add("paint_Button");
    paintButton.style.backgroundColor = colour;
    containerPaint.appendChild(paintButton);

    paintButton.addEventListener("click", function () {
        paintColour = colour;
        updateUI();
    });
}

// Functions
function addInkEffect(colour) {
    gridDivAll = document.querySelectorAll(".grid_div");
    gridDivAll.forEach(function (div) {
        div.addEventListener("mouseenter", function () {
            div.style.backgroundColor = colour;
        });
    });
}

function updateUI() {
    // clear existing html elements
    containerGrid.innerHTML = "";

    // creates the game grid
    createGrid(gridDivWidth);

    // Adds the hover effect to all divs
    addInkEffect(paintColour);
}

// Calling Functions
updateUI();

createPaintButton("green");
createPaintButton("orange");
createPaintButton("violet");
createPaintButton("navy");
