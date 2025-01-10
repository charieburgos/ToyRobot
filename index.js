"use strict";

//dimensions of the table top; default is 5 x 5.
const xLimit = 5;
const yLimit = 5;

//valid moves
const validF = ["North", "South", "East", "West"];

//starting point;
let x = 0;
let y = 0;
let f = "SOUTH WEST";

//get input and split into array
let instructions = [];
const input = prompt("Where should the robot go?");
instructions = input.split(" ");

//moves the robot one unit forward in the direction it is currently facing.
//north = (0, 1);
//south = (0, -1);
//east = (1, 0);
//west = (-1, 0);

const move = function (x, y, f) {
  if (f == "NORTH") {
    x += 0;
    y += 1;
  } else if (f == "EAST") {
    x += 1;
    y += 0;
  } else if (f == "SOUTH") {
    x += 0;
    y -= 1;
  } else if (f == "WEST") {
    x -= 1;
    y += 0;
  } else {
    x, y, f;
  }
  console.log(`Robot moved to ${x}, ${y} facing ${f}`);
};

//rotates robot 90 degrees to the left.
const rotateLeft = function (x, y, f) {
  switch (f) {
    case "NORTH":
      f = "WEST";
      break;
    case "WEST":
      f = "SOUTH";
      break;
    case "SOUTH":
      f = "EAST";
      break;
    case "EAST":
      f = "NORTH";
  }
  return x, y, f;
};

//rotates robot 90 degrees to the right.
const rotateRight = function (x, y, f) {
  switch (f) {
    case "NORTH":
      console.log("EAST");
      break;
    case "EAST":
      console.log("SOUTH");
      break;
    case "SOUTH":
      console.log("WEST");
      break;
    case "WEST":
      console.log("NORTH");
    default:
      console.log(f);
  }
};

//reports the coordinates of robot
const report = function (posX, posY, posF) {
  console.log(`Robot is at position: ${posX}, ${posY}, ${posF}.`);
};

//check if PLACE is provided if so, get the instructions after.
//Currently not providing newline so need to do some weirdness

// const placeRobot = function (instructions) {
//   const placePos = instructions.indexOf("PLACE");
//   if (placePos >= 0) {
//     const placeCoords = instructions[placePos + 1];
//     [x, y, f] = placeCoords.split(",");
//     getCoordinates(x, y, f);
//   }
// };

// //place: adds the robot on the table top where x is the x coordinate and y is the y coordinate and f where the robot is facing.
const getCoordinates = function (coords) {
  //place the robot's initial position
  const placePos = coords.indexOf("PLACE");

  if (placePos >= 0) {
    const placeCoords = coords[placePos + 1];
    [x, y, f] = placeCoords.split(",");
    x = Number(x);
    y = Number(y);
  }

  const moves = [...coords.splice(placePos + 2)];

  // let i = 0;
  // while (i < moves.length) {
  //   i++;
  //   if (moves[i] == "MOVE") move(x, y, f);
  //   if (moves[i] == "LEFT") rotateLeft(x, y, f);
  //   if (moves[i] == "RIGHT") rotateRight(x, y, f);
  //   if (moves[i] == "REPORT") report(x, y, f);
  // }

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] == "MOVE") {
      move(x, y, f);
    } else if (moves[i] == "LEFT") {
      rotateLeft(x, y, f);
    } else if (moves[i] == "RIGHT") {
      rotateRight(x, y, f);
    } else report(x, y, f);
  }
};

//Test case 1: PLACE 0,0,NORTH MOVE REPORT

//getCoordinates(instructions);

//getCoordinates(instructions);
//const coords = "0,0,NORTH";
//console.log(move(0, 0, "NORTH"));

getCoordinates(instructions);
