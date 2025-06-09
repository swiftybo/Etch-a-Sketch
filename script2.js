"use strict";

// Elements

// sections:
const gameSection = document.querySelector(".game-section");

// containers:
const containerGrid = document.querySelector(".grid-container");

// Game Parts:
let gridDiv;
let gridDivAll;

// Constants
const gridContainerWidth = 640;

// Creating html elements

function createGridDiv() {
    gridDiv = document.createElement("div");
    containerGrid.appendChild(gridDiv);
    gridDiv.classList.add("grid-div");
}

// Functions

for (let i = 0; i < 256; i++) {
    createGridDiv();
}

function addInkEffect() {
    gridDivAll = document.querySelectorAll(".grid-div");
    gridDivAll.forEach(function (div) {
        div.addEventListener("mouseenter", function () {
            div.style.backgroundColor = "yellow";
        });
    });
}
addInkEffect();
