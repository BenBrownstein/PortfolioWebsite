const ball = document.getElementById("ball");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

let playerY = 150;
let computerY = 150;
let ballX = 300;
let ballY = 200;
let ballSpeedX = -5;
let ballSpeedY = 5;
let playerScoreValue = 0;
let computerScoreValue = 0;

function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with top and bottom
    if (ballY < 0 || ballY > 390) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddles
    if (
        (ballX < 10 && ballY > playerY && ballY < playerY + 100) ||
        (ballX > 580 && ballY > computerY && ballY < computerY + 100)
    ) {
        ballSpeedX = -ballSpeedX;
    }

    // Ball out of bounds
    if (ballX < 0) {
        // Computer scores
        computerScoreValue++;
        computerScore.textContent = computerScoreValue;
        reset();
    } else if (ballX > 600) {
        // Player scores
        playerScoreValue++;
        playerScore.textContent = playerScoreValue;
        reset();
    }

    computerAI();

    ball.style.top = ballY + "px";
    ball.style.left = ballX + "px";
    player.style.top = playerY + "px";
    computer.style.top = computerY + "px";

    requestAnimationFrame(update);
}

function reset() {
    ballX = 300;
    ballY = 200;
    ballSpeedX = -5;
    ballSpeedY = 5;
    playerY = 150;
    computerY = 150;
}

function computerAI() {
    const computerCenter = computerY + 50;
    if (computerCenter < ballY - 35) {
        computerY += 5;
    } else if (computerCenter > ballY + 35) {
        computerY -= 5;
    }
}

document.addEventListener("mousemove", (e) => {
    const mouseY = e.clientY - document.querySelector(".game").getBoundingClientRect().top;
    playerY = mouseY - 50;
});

update();
