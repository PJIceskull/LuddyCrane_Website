// Import
// Variables
const gameCanvas = document.getElementById("gameCanvas"); // Target element with Id: "gameCanvas", this variable should never change
// let ctx = gameCanvas.getContext("2d"); // GEt Context for 2D
let gl = gameCanvas.getContext("webgl"); // GEt Context for Webgl
// Godot
// var engine = new Engine($GODOT_CONFIG);

// Build Canvas
// gameCanvas.fillStyle = "black";

// console.log(ctx);
console.log(gl);

// engine.startGame({ canvas: gameCanvas });
