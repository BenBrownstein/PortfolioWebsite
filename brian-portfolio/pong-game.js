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

const gameBounds = {
    top: 0,
    bottom: 400,
    left: 0,
    right: 600,
};

function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with top and bottom
    if (ballY < gameBounds.top || ballY > gameBounds.bottom) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddles
    if (
        (ballX < 10 && ballY > playerY && ballY < playerY + 100) ||
        (ballX > gameBounds.right - 10 && ballY > computerY && ballY < computerY + 100)
    ) {
        ballSpeedX = -ballSpeedX;
    }

    // Ball out of bounds
    if (ballX < gameBounds.left) {
        // Computer scores
        computerScoreValue++;
        computerScore.textContent = computerScoreValue;
        reset();
    } else if (ballX > gameBounds.right) {
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
    playerY = Math.max(gameBounds.top, Math.min(playerY, gameBounds.bottom - 100));
    computerY = 150;
}

function computerAI() {
    const computerCenter = computerY + 50;
    const delay = Math.random() * 15; // Introduce randomness to AI's decision-making

    if (Math.random() < 0.95) {
        if (ballY > computerCenter + delay) {
            computerY += 5; // Move the paddle down
        } else if (ballY < computerCenter - delay) {
            computerY -= 5; // Move the paddle up
        }
    }
}


document.addEventListener("mousemove", (e) => {
    const mouseY = e.clientY - document.querySelector(".game").getBoundingClientRect().top;
    playerY = Math.max(gameBounds.top, Math.min(mouseY - 50, gameBounds.bottom - 100));
});

update();
