"use strict";

let newX = 0;
let newY = 0;
let newF = "SOUTH WEST";

//dimensions of the table top; default is 5 x 5.
const xLimit = 5;
const yLimit = 5;

const output = (command, x, y, f) =>
  console.log(`Robot ${command} at coordinate (${x}, ${y}) facing ${f}.`);

//Creates input field on webpage and button to submit input
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

//Manipulate input from user and calls respective functions
document.querySelector("button").addEventListener("click", function () {
  const instructions = document.querySelector("textarea").value;
  const instructionsSplit = instructions.split("\n");

  for (const [i, row] of instructionsSplit.entries()) {
    const withinBoard = newX <= xLimit && newY <= yLimit;

    if (withinBoard) {
      console.log(`Instruction ${i + 1}: ${row}`);
    } else {
      console.log("Robot has fallen off the board :(");
    }

    if (row.includes("PLACE")) {
      const [command, coordinates] = row.split(" ");
      const [x, y, f] = coordinates.split(",");
      output("placed", x, y, f);
      [newX, newY, newF] = [Number(x), Number(y), f];
    }

    if (row.includes("MOVE") && withinBoard) move(newX, newY, newF);
    if (row.includes("LEFT") && withinBoard) turnLeft(newX, newY, newF);
    if (row.includes("RIGHT") && withinBoard) turnRight(newX, newY, newF);
    if (row.includes("REPORT") && withinBoard) report(newX, newY, newF);
  }
});

//List of valid directions
const validF = ["NORTH", "EAST", "SOUTH", "WEST"];

//Functions to rotate robots
const turnLeft = function (x, y, f) {
  newF = validF[validF.indexOf(f) - 1] || "WEST";
  output("rotated to the left", x, y, newF);
};

const turnRight = function (x, y, f) {
  newF = validF[validF.indexOf(f) + 1] || "WEST";
  output("rotated to the right", x, y, newF);
};

//Function to moves the robot one unit forward in the direction it is currently facing.
const moveY = function (x, y, f, p) {
  newY = y + p;
  output("moved", x, newY, f);
};

const moveX = function (x, y, f, p) {
  newX = x + p;
  output("moved", x, newY, f);
};

const move = function (x, y, f) {
  if (f === "NORTH") moveY(x, y, f, 1);
  if (f === "EAST") moveX(x, y, f, 1);
  if (f === "SOUTH") moveY(x, y, f, -1);
  if (f === "WEST") moveX(x, y, f, -1);
};

//reports the coordinates of robot
const report = (x, y, f) => output("is", x, newY, newF);
