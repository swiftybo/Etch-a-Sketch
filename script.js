"use strict";

const gridContainer = document.querySelector(".grid-container");

// Creating the grid div:
const gridDiv = document.createElement("div");
gridDiv.classList.add("grid-div");
gridDiv.textContent = "New div!";
gridContainer.appendChild(gridDiv);
