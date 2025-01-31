"use strict";
const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

class Table {
  constructor(xOrigin, yOrigin, xLimit, yLimit) {
    this.xOrigin = xOrigin;
    this.yOrigin = yOrigin;
    this.xLimit = xLimit;
    this.yLimit = yLimit;
  }
}

class Commands {
  move() {
    this.moveDirections = {
      NORTH: [0, 1],
      EAST: [1, 0],
      SOUTH: [0, -1],
      WEST: [-1, 0],
    };
  }
  rotate() {}
  report() {}
}

const output = function (...details) {
  const [name, command, x, y, dir] = details;
  console.log(`${name} ${command} to position (${x}, ${y}) facing ${dir}.`);
};

let command;
class Toy {
  //Constructor method to create the toy object and place it on the board.
  constructor(name, xPos, yPos, direction) {
    this.name = name; //name of the object
    this.xPos = xPos; //x-direction
    this.yPos = yPos; //y-direction
    this.direction = direction; //direction object is facing

    this.moveDirections = {
      NORTH: [0, 1],
      EAST: [1, 0],
      SOUTH: [0, -1],
      WEST: [-1, 0],
    };
  }

  place() {
    command = "placed";
    this.report();
  }

  move() {
    command = "moved";
    const [xDir, yDir] = this.moveDirections[this.direction] || [0, 0];
    this.xPos += xDir;
    this.yPos += yDir;
    this.report();
  }

  rotate(side) {
    this.side = side.toLowerCase();
    command = `rotated ${this.side}`;
    console.log(command);
    //get current index of direction toy is facing.
    const dirIndex = directions.indexOf(this.direction);

    //new direction is the next direction and if it is the end of the list return the mod.
    this.direction =
      this.side === "left"
        ? directions.at((dirIndex - 1) % directions.length)
        : directions.at((dirIndex + 1) % directions.length);
    this.report();
  }

  report() {
    output(this.name, command, this.xPos, this.yPos, this.direction);
  }
}

/*-----TEST--------*/
const robot = new Toy("Robot", 1, 2, "EAST");
robot.place();
robot.move();
robot.move();
robot.rotate("left");
robot.move();
robot.report();
