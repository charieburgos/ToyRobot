# ToyRobot

Toy Robot Challenge using JavaScript

# Robot Challenge

[![Code Climate](https://codeclimate.com/github/RafaelChefe/toy_robot/badges/gpa.svg)](https://codeclimate.com/github/RafaelChefe/toy_robot)

## Table of contents:

- [Description](./README.md#description)
  - [Constraints](./README.md#constraints)
  - [Example Input and Output](./README.md#example-input-and-output)
  - [Deliverables](./README.md#deliverables)
  - [Setup](./README.md#setup)
  - [Running the app](./README.md#running-the-app)
  - [Running the tests](./README.md#running-the-tests)
  - [Considerations about the development](./README.md#considerations-about-the-development)
  - [Examples of use](./test_data/test_data.txt)

## Description

- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

Create an application that can read in commands of the following form:

```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

- `PLACE` will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.

- The origin (0,0) can be considered to be the SOUTH WEST most corner.

- The first valid command to the robot is a `PLACE` command, after that, any sequence of commands may be issued, in any order, including another `PLACE` command. The application should discard all commands in the sequence until a valid `PLACE` command has been executed

- `MOVE` will move the toy robot one unit forward in the direction it is currently facing.

- `LEFT` and `RIGHT` will rotate the robot 90 degrees in the specified direction without changing the position of the robot.

- `REPORT` will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.

- A robot that is not on the table can choose to ignore the `MOVE`, `LEFT`, `RIGHT` and `REPORT` commands.

- Input can be from a file, or from standard input, as the developer chooses.

- Provide test data to exercise the application.

### Constraints

- The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.

- Any move that would cause the robot to fall must be ignored.

### Example Input and Output:

#### Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

#### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

#### Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH
