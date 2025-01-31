"use strict";
const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

//Class to define the table top dimensions
class Table {
  constructor(xOrigin, yOrigin, xLimit, yLimit) {
    this.xOrigin = xOrigin;
    this.yOrigin = yOrigin;
    this.xLimit = xLimit;
    this.yLimit = yLimit;
  }
}

//Class to define instructions on how commands work
class Commands {
  move() {
    return {
      NORTH: [0, 1],
      EAST: [1, 0],
      SOUTH: [0, -1],
      WEST: [-1, 0],
    };
  }

  rotate(direction) {
    const dirIndex = directions.indexOf(direction);
    return {
      LEFT: directions.at(
        (dirIndex - 1 + directions.length) % directions.length
      ),
      RIGHT: directions.at((dirIndex + 1) % directions.length),
    };
  }

  report(...details) {
    const [name, command, x, y, dir] = details;
    console.log(`${name} ${command} to position (${x}, ${y}) facing ${dir}.`);
  }
}

//Class to create a toy object that can do the following commands
class Toy {
  //Constructor method to create the toy object and place it on the board.
  constructor(name, xPos, yPos, direction) {
    this.name = name; //name of the object
    this.xPos = xPos; //x-direction
    this.yPos = yPos; //y-direction
    this.direction = direction; //direction object is facing
    this.command = "";
    this.getCommands = new Commands(); //Create an instance of Commands class.
  }

  place() {
    this.command = "placed";
    this.report();
  }

  move() {
    this.command = "moved";

    //Get move directions from the move method
    const moveDirections = this.getCommands.move();

    const [xDir, yDir] = moveDirections[this.direction] || [0, 0];
    this.xPos += xDir;
    this.yPos += yDir;
    this.report();
  }

  rotate(side) {
    this.side = side.toUpperCase();
    this.command = `rotated ${this.side}`;

    //Get rotate directions from the rotate method.
    const rotateDirection = this.getCommands.rotate(this.direction);
    this.direction = rotateDirection[this.side];
    this.report();
  }

  report() {
    this.getCommands.report(
      this.name,
      this.command,
      this.xPos,
      this.yPos,
      this.direction
    );
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
