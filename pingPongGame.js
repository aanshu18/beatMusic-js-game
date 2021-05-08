let canvas = document.getElementById("table");
let draw = canvas.getContext('2d');

/*

sample code here
draw.fillStyle = "green";
//fillRect used to draw rectangle
//fillStyle used to color 

draw.fillRect(0, 0,canvas.width,canvas.height);

draw.fillStyle ="red";
draw.fillRect(100,100,30,30);

draw.fillStyle  = "orange";
draw.beginPath();
draw.arc(100,100,10,0,Math.PI*2,false);
draw.closePath();
draw.fill();

*/




//creating objects
/*
user
Computer
ball
separator
Score card
*/

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    vel_x: 5,
    vel_y: 5,
    speed: 5,
    color: "green"
}

const user = {
    x: 0,
    y: (canvas.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: "red"
}

const cpu = {
    x: canvas.width - 10,
    y: (canvas.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: "red"
}

const separator = {
    x: (canvas.width - 2) / 2,
    y: 0,
    width: 2,
    height: 10,
    color: "orange"
}

function drawRectangle(x, y, w, h, color) {
    draw.fillStyle = color;
    draw.fillRect(x, y, w, h);
    console.log("rect printed");
}

function drawCircle(x, y, r, color) {
    draw.fillStyle = color;
    draw.beginPath();
    draw.arc(x, y, r, 0, Math.PI * 2, true);
    draw.closePath();
    draw.fill();
    console.log("circle printed");

}

function drawScore(text, x, y) {
    draw.fillStyle = "white";
    draw.font = "60px Ariel";
    draw.fillText(text, x, y);
    console.log("score printed");

}

function drawseparator() {
    for (let i = 0; i <= canvas.height; i += 20) {
        drawRectangle(separator.x, separator.y + i, separator.width, separator.height)
    }
    console.log("separator printed");

}

function helper() {
    drawRectangle(0, 0, canvas.width, canvas.height, "black");
    drawScore(0, canvas.width / 4, canvas.height / 5);
    drawScore(0, 3 * canvas.width / 4, canvas.height / 5);
    drawseparator();
    drawRectangle(user.x, user.y, user.width, user.height, user.color);
    drawRectangle(cpu.x, cpu.y, cpu.width, cpu.height, cpu.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

function call_back() {
    helper();
}

let fps = 50;
let looper = setInterval(call_back, 1000 / fps);

function restart() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.vel_x = -ball.vel_x;
    ball.speed = 5;
}

function cpu_movement() {
    if (cpu.y < ball.y)
        cpu.y += 5;
    else
        cpu.y -= 5;
}