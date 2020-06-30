const board_border = 'black';
const board_background = "white";
const snake_col = 'lightblue';
const snake_border = 'darkblue'


let snake = [{ x: 200, y: 200 }, { x: 190, y: 200 }, { x: 180, y: 200 }, { x: 170, y: 200 }, { x: 160, y: 200, }];
//Horizontal velocity
let dx = 10;
//Vertical velocity
let dy = 0;
//Get the canvas element
const snakeboard = document.getElementById("snakeboard");
//return a two dimensional drawing context
const snakeboard_ctx = snakeboard.getContext("2d");
//start game

start();

//main function called repeatedly to keep the game running
function start() {
    setTimeout(function onTick() {

        clear_board();
        move_snake();
        drawSnake();
        //call start again
        start();
    }, 100)

}

function clear_board() {
    //  Select the colour to fill the drawing
    snakeboard_ctx.fillStyle = board_background;
    //  Select the colour for the border of the canvas
    snakeboard_ctx.strokestyle = board_border;
    // Draw a "filled" rectangle to cover the entire canvas
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    // Draw a "border" around the entire canvas
    snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);

}
/*Function that prints the parts*/
function drawSnake() {
    //draw each part
    snake.forEach(drawSnakePart);

}

function drawSnakePart(snakePart) {
    // Set the colour of the snake part
    snakeboard_ctx.fillStyle = snake_col;
    // Set the border colour of the snake part
    snakeboard_ctx.strokestyle = snake_border;
    // Draw a "filled" rectangle to represent the snake part at the coordinates
    // the part is located
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    //Draw a border aroud the snake part
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function move_snake() {
    //Create the new Snake's head
    const head = { x: snake[0].x + dx, y: snake[0].y + dy};
   // add the new head to the beginning of snkae body
    snake.unshift(head);
    snake.pop();

}
