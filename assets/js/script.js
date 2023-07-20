console.log("This is running :D");

function runGame() {
    let userPlay = this.getAttribute("id");
    console.log(userPlay);
}

function checkPlays() { }

function getComputerPlay() { }

function updateScoreBoard() { }

function displayResult() { }

let buttons = document.getElementsByClassName("btn-play");
for (let button of buttons) {
    button.addEventListener('click', runGame);
}