"use strict";
const defaultNumOfSquares = 16;
let currentTotalSquares = defaultNumOfSquares * defaultNumOfSquares;
let currentDimensions = getDimensions(defaultNumOfSquares);

const defaultPenColour = "red";
let currentColour = defaultPenColour;

const gridContainer = document.querySelector(".grid-container");
const gridDivAll = document.querySelectorAll(".grid-div");

createGameGrid(currentTotalSquares, currentDimensions, currentColour);

const gameSection = document.querySelector(".game-section");
console.log(gridDivAll);
const resizeButton = createResizeButton();
// const colourContainer =
createColourContainer();
let opacity = 0.2;

/// The lines below returns "TypeError: Cannot read properties of null". For some reason cannot do this and must create colourContainer variable from returning the object div from the function.
const colourContainer = document.querySelector(".colour-container");

const redPenButton = createPenColourButton("red");
const bluePenButton = createPenColourButton("lightblue");
const yellowPenButton = createPenColourButton("yellow");
const greenPenButton = createPenColourButton("lightgreen");

colourContainer.appendChild(redPenButton);
colourContainer.appendChild(bluePenButton);
colourContainer.appendChild(yellowPenButton);
colourContainer.appendChild(greenPenButton);

const colour_statement = document.createElement("p");
colour_statement.textContent =
    "This is the colour section! Change your pen colour below ⬇️";
gameSection.insertBefore(colour_statement, colourContainer);

// Function for getting dimensions of grid square (returned as a string in pixels):
function getDimensions(numOfSquares) {
    return String(640 / numOfSquares) + "px";
}

// Function for creating the grid div:
function createGridDiv(dimension) {
    // This is a local gridDiv variable (not accessible out of function, therefore there is a global variable for all gridDivs)
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    // gridDiv.classList.add(".grid-div-default:hover");
    gridDiv.style.width = dimension;
    gridDiv.style.height = dimension;
    // gridDiv.addEventListener("mouseover", function () {
    //     gridDiv.style.backgroundColor = colour;
    //     opacity += 0.025;
    //     gridDiv.style.opacity = opacity;
    // });
    gridContainer.appendChild(gridDiv);
}

// Function to create the entire game grid:
function createGameGrid(totalsquares, measurements) {
    for (let i = 0; i < totalsquares; i++) {
        createGridDiv(measurements);
    }
    gridDivAll.forEach((gridDiv) => {
        console.log(gridDiv);
        gridDiv.addEventListener("mouseover", () => {
            gridDiv.style.backgroundColor = colour;
            opacity += 0.025;
            gridDiv.style.opacity = opacity;
        });
    });
}

console.log({ gridDivAll });

// Function for creating resize button in DOM & assigning classes & event listener:
function createResizeButton() {
    let resizeButton = document.createElement("button");
    resizeButton.classList.add("button");
    resizeButton.textContent = "Resize Grid";
    resizeButton.style.marginBottom = "30px";
    resizeButton.style.padding = "10px, 30px";
    resizeButton.style.color = "navy";
    resizeButton.style.fontSize = "20px";
    resizeButton.addEventListener("click", resizeGrid);
    gameSection.insertBefore(resizeButton, gridContainer);
    return resizeButton;
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
        currentTotalSquares = newNumOfSquares * newNumOfSquares;
        currentDimensions = getDimensions(newNumOfSquares);
        createGameGrid(currentTotalSquares, currentDimensions, currentColour);
    }
}

function createColourContainer() {
    const colourContainer = document.createElement("div");
    colourContainer.classList.add("colour-container");
    colourContainer.style.margin = "15px";
    colourContainer.style.display = "flex";
    colourContainer.style.justifyContent = "center";
    colourContainer.style.alignItems = "center";
    colourContainer.style.fontSize = "18px";
    gameSection.appendChild(colourContainer);
    //This return statement is essential so that the variable returns the object div and not null. Remove comments at start to see this error.
    // return colourContainer;
}

function createPenColourButton(colour) {
    const penColourButton = document.createElement("div");
    penColourButton.classList.add("penColourButton");
    penColourButton.setAttribute("id", `${colour}`);
    penColourButton.style.backgroundColor = colour;
    penColourButton.style.margin = "8px";
    penColourButton.addEventListener("click", function () {
        gridContainer.innerHTML = "";
        createGameGrid(currentTotalSquares, currentDimensions, colour);
        currentColour = colour;
    });
    return penColourButton;
}
