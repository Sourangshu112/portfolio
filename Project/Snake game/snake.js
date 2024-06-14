const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 16;

// load images
const foodImg = new Image();
const ground = new Image();
const snake_up = new Image();
const snake_down = new Image();
const snake_left = new Image();
const snake_right = new Image();
const snake_body_up = new Image();
const snake_body_left = new Image();


ground.src = "ground.png";
foodImg.src = "food.png";
snake_up.src = "snake up.png";
snake_down.src = "snake down.png";
snake_left.src = "snake left.png";
snake_right.src = "snake right.png";
snake_body_up.src = "snake body up.png";
snake_body_left.src = "snake body left.png";


// load audio files
let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "dead.mp3";
eat.src = "eat.mp3";
up.src = "up.mp3";
right.src = "right.mp3";
left.src = "left.mp3";
down.src = "down.mp3";

// declair the variable
let snake = [];
let food;
let score = 0;
let d = "UP";
let game;
let level = 0;
let pau;
let k;
let a = 0;
let gameOver = false;

// create the snake
snake[0] = {
    x : 18 * box,
    y : 20 * box
};

// create the food
food = {
    x : Math.floor(Math.random()*34+2) * box,
    y : Math.floor(Math.random()*30+6) * box
};


//control the snake
document.addEventListener("keydown",direction);

function direction(event){
    if(event.keyCode == 37 && d != "RIGHT"){
        d = "LEFT";
        left.play();
    }
    else if(event.keyCode == 38  && d != "DOWN"){
        d = "UP";
        up.play();
    }
    else if(event.keyCode == 39 && d != "LEFT"){
        d = "RIGHT";
        right.play();
    }
    else if(event.keyCode == 40 && d != "UP"){
        d = "DOWN";
        down.play();
    }
    else if (event.keyCode == 32 && pau != "PAUSE"){
        pausegame();
        k = d;
        pau = "PAUSE";
    }
    else if (event.keyCode == 32 && pau == "PAUSE") {
        resumegame();
        d = k;
        pau = "MOVE";
    }
}

//pause game
function pausegame() {
    if (!gameOver) {
        clearInterval(game);
        ctx.fillStyle = "yellow";
        ctx.font = "70px Changa one";
        ctx.fillText("Game Paused",8*box,20*box);
        ctx.font = "30px Changa one";
        ctx.fillText("press space to resume",12*box,22*box);
    }
}

//resume game
function resumegame() {
    if (!gameOver) {
        levels();
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}


// draw everything to the canvas
function draw(){
    
    ctx.drawImage(ground,0,0);
    
    for(let i = 0; i < snake.length ; i++){
        if (i == 0) {
            if (d == "UP"){
                ctx.drawImage(snake_up,snake[i].x,snake[i].y,box,box);
            }
            else if (d == "DOWN"){
                ctx.drawImage(snake_down,snake[i].x,snake[i].y,box,box);
            } 
            else if (d == "LEFT"){
                ctx.drawImage(snake_left,snake[i].x,snake[i].y,box,box);
            }
            else if (d == "RIGHT"){
                ctx.drawImage(snake_right,snake[i].x,snake[i].y,box,box);
            }
        }
        else{
            if (d == "UP" || d == "DOWN"){
                ctx.drawImage(snake_body_up,snake[i].x,snake[i].y,box,box);
            }
            else if (d == "LEFT" || d == "RIGHT"){
                ctx.drawImage(snake_body_left,snake[i].x,snake[i].y,box,box);
            }
        }
    }
    
    ctx.drawImage(foodImg, food.x, food.y,box,box);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        eat.play();
        food =
        {
            x : Math.floor(Math.random()*34+2) * box,
            y : Math.floor(Math.random()*30+6) * box
        }
        // we don't remove the tail
    }
    else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    let newHead = {
        x : snakeX,
        y : snakeY
    }

    //print score
    ctx.fillStyle = "yellow";
    ctx.font = "30px Changa one";
    ctx.fillText(score,4*box,3.2*box);

    // print level
    ctx.fillStyle = "yellow";
    ctx.font = "30px Changa one";
    ctx.fillText("level:-"+level,6*box,3.2*box);




    // game over
    if(snakeX < 2*box || snakeX > 35 * box || snakeY < 6 * box 
        || snakeY > 35*box || collision(newHead,snake)){
        clearInterval(game);
        gameOver = true;
        dead.play();
        ctx.fillStyle = "yellow";
        ctx.font = "70px Changa one";
        ctx.fillText("Game over",8*box,20*box);
        ctx.font = "50px Changa one";
        ctx.fillText("Score is "+score,7*box,23*box);
    }
    snake.unshift(newHead);

    //making levels
    if (score % 10 == 0) {
        for (var i = a; i == 1; i++){
            level++;
            levels();
        }
        a++;
    }
    else if (score % 10 != 0) a = 0;
}

// controlling without keyboard
const buttonUp = document.getElementById("controlup");
const buttonDown = document.getElementById("controldown");
const buttonLeft = document.getElementById("controlleft");
const buttonRight = document.getElementById("controlright");
const buttonPause = document.getElementById("pause")

buttonUp.addEventListener('click', function () {
    if (d != "DOWN") {
        d = "UP";
        up.play();
    }
});

buttonDown.addEventListener('click', function () {
    if (d != "UP") {
        d = "DOWN";
        down.play();
    }
});

buttonLeft.addEventListener('click', function () {
    if (d != "RIGHT") {
        d = "LEFT";
        left.play();
    }
});

buttonRight.addEventListener('click', function () {
    if (d != "LEFT") {
        d = "RIGHT";
        right.play();
    }
});

buttonPause.addEventListener('click',function() {
    if (pau != "PAUSE"){
        pausegame();
        k = d;
        pau = "PAUSE";
        buttonPause.innerHTML="RESUME"
    }
    else {
        resumegame();
        d = k;
        pau = "MOVE";
        buttonPause.innerHTML="PAUSE"
    }
})

game = setInterval(draw,400);

// changing the speed of snake according to the levels
function levels(){
    if (level == 0){
        clearInterval(game);
        game = setInterval(draw,400);
    }
    else if (level == 1){
        clearInterval(game);
        game = setInterval(draw,350);
    }
    else if (level == 2){
        clearInterval(game);
        game = setInterval(draw,300);
    }
    else if (level == 3)
    {
        clearInterval(game);
        game = setInterval(draw,250);
    }
    else if (level == 4) {
        clearInterval(game);
        game = setInterval(draw,200);
    }
    else if (level == 5)
    {
        clearInterval(game);
        game = setInterval(draw,150);
    }
    else if (level == 6){
        clearInterval(game);
        game = setInterval(draw,100);
    }
    else if (level == 7){
        clearInterval(game);
        game = setInterval(draw,50);
    }
}


