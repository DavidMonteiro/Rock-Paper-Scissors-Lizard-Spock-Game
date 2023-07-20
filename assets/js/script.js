console.log("This is running :D");

function runGame() {
    let userPlay = this.getAttribute("id");
    let computerPlay = getComputerPlay();

    console.log('userplay: ', userPlay);
    console.log('computerPlay: ', computerPlay);
}

function checkPlays() { }

function getComputerPlay() {
    let computerPlay = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    let randomIndex = Math.floor(Math.random() * computerPlay.length);
    return computerPlay[randomIndex];
}

function updateScoreBoard() { }

function displayResult() { }

let buttons = document.getElementsByClassName("btn-play");
for (let button of buttons) {
    button.addEventListener('click', runGame);
}