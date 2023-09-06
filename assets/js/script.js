console.log("This is running :D");
var userScore;
var computerScore;

var cssRoot = document.querySelector(':root');


function runGame() {
    if (userScore < 5 && computerScore < 5) {
        let userPlay = this.getAttribute("id");
        let computerPlay = getComputerPlay();

        console.log('userplay: ', userPlay);
        console.log('computerPlay: ', computerPlay);

        let result = checkPlays(userPlay, computerPlay);
        let resultMessage = "";
        updateScoreBoard(result);

        switch (result) {
            case 1:
                resultMessage = generateResultText(userPlay, computerPlay);
                console.log(resultMessage);
                console.log('You win!');
                break;
            case 2:
                resultMessage = generateResultText(computerPlay, userPlay);
                console.log('Computer wins!');
                console.log(resultMessage);
                break;
            default:
                resultMessage = 'It\'s a tie! Play again.';
                console.log(resultMessage);
        }

        displayResult(userPlay, computerPlay, resultMessage);
    }
    if (userScore > 4) {
        endGame("User");
    }
    else if (computerScore > 4) {
        endGame("Computer");
    }
}

function checkPlays(userPlay, computerPlay) {
    /*
    The rules
        Rock crushes scissors. Rock crushes lizard. 
        Paper covers rock. Paper disproves Spock.
        Scissors cuts paper. Scissors decapitates lizard. 
        Lizard eats paper. Lizard poisons Spock. 
        Spock smashes scissors. Spock vaporizes rock. 
    */

    //check if its a tie, return 0 for a tie
    if (userPlay === computerPlay) {
        return 0;
    }
    //check if user or computer won, return 1 if user wins or return 2 if computer wins
    if (
        (userPlay === 'rock' && (computerPlay === 'scissors' || computerPlay === 'lizard')) ||
        (userPlay === 'paper' && (computerPlay === 'rock' || computerPlay === 'spock')) ||
        (userPlay === 'scissors' && (computerPlay === 'paper' || computerPlay === 'lizard')) ||
        (userPlay === 'lizard' && (computerPlay === 'paper' || computerPlay === 'spock')) ||
        (userPlay === 'spock' && (computerPlay === 'scissors' || computerPlay === 'rock'))
    ) {
        return 1;
    }
    else {
        return 2;
    }
}

function getComputerPlay() {
    let computerPlay = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    let randomIndex = Math.floor(Math.random() * computerPlay.length);
    return computerPlay[randomIndex];
}

//Generate the score section when the page initially loads
function initiateScoreBoard() {
    userScore = 0;
    computerScore = 0;

    reset_border();

    let gameResult = document.getElementById("battle-section");
    gameResult.innerHTML = "";

    setScoreBoard();
}
function updateScoreBoard(winner) {
    if (winner === 1) {
        userScore += 1;
    }
    else if (winner === 2) {
        computerScore += 1;
    }

    setScoreBoard();
}

function setScoreBoard() {
    let scoreBoard = document.getElementById("score-board");
    scoreBoard.innerHTML = `
        <p>Score: 
            <spam>You ${userScore}</spam> - 
            <spam>${computerScore} Computer</spam>
        </p>`;

}

function generateResultText(winner, loser) {
    //just in case
    // This function will generate the message which will then be displayed in the result/battle section
    let result = "";

    switch (winner) {
        case "rock":
            if (loser === "scissors") {
                result = "Rock crushes scissors.";
            }
            else if (loser === "lizard") {
                result = "Rock crushes lizard.";
            }
            break;

        case "paper":
            if (loser === "rock") {
                result = "Paper covers rock.";
            }
            else if (loser === "Spock") {
                result = "Paper disproves Spock.";
            }
            break;

        case "scissors":
            if (loser === "paper") {
                result = "Scissors cuts paper.";
            }
            else if (loser === "lizard") {
                result = "Scissors decapitates lizard.";
            }
            break;

        case "lizard":
            if (loser === "paper") {
                result = "Lizard eats paper.";
            }
            else if (loser === "spock") {
                result = "Lizard poisons Spock.";
            }
            break;

        case "spock":
            if (loser === "scissors") {
                result = "Spock smashes scissors.";
            }
            else if (loser === "rock") {
                result = "Spock vaporizes rock.";
            }
            break;

        default:
            result = "Invalid combination.";
    }

    return result;
}

function displayResult(userPlay, computerPlay, resultMessage) {
    let html = `
    <div class="battle-result">
            <div class="battle-result-image">
                <img src="assets/images/${userPlay}.jpg" alt="User choice">
                <span>vs</span>
                <img src="assets/images/${computerPlay}.jpg" alt="Computer choice">
            </div>
            <div class="battle-result-text">
                <p>${resultMessage}</p>
            </div>
        </div>`;
    let battleResult = document.getElementById("battle-section");
    battleResult.innerHTML = html;
}

function resetGame() {
    initiateScoreBoard();
    let battleResult = document.getElementById("battle-section");
    battleResult.innerHTML = "";
}

let buttons = document.getElementsByClassName("btn-play");
for (let button of buttons) {
    button.addEventListener('click', runGame);
}

let scoreBoard = document.getElementById("score-board");
scoreBoard.addEventListener("DOMContentLoaded", initiateScoreBoard());


function endGame(winner) {
    let gameMessage = "";
    if (winner === "User") {
        gameMessage = "Congratulations! You won";
        set_win_border();
    }
    else {
        gameMessage = "Oops, the computer won this round! Don't give up, try again!";
        set_lost_border();
    }

    let html = `
    <div class="battle-result">
            <div class="result-txt">
                <p class="result-txt">${gameMessage}</p>
            </div>
            <div id="reset-section">
                <button id="reset-button" class="btn-reset" onclick="resetGame()">Play another Game</button>
            </div>
        </div>`;
    let gameResult = document.getElementById("battle-section");
    gameResult.innerHTML = html;
}

function set_win_border() {
    // Set the value of variable --resultBorder to green
    try {
        cssRoot.style.setProperty('--resultBorder', '4px solid #00ff00');
    }
    catch (error) {
        console.error("Error setting property:", error);
    }
}
function set_lost_border() {
    // Set the value of variable --resultBorder to red)
    try {
        cssRoot.style.setProperty('--resultBorder', '4px solid #ff0000');
    }
    catch (error) {
        console.error("Error setting property:", error);
    }
}
function reset_border() {
    // Reset the value of variable --resultBorder to blue)
    try {
        cssRoot.style.setProperty('--resultBorder', '4px solid #3E54AC');
    }
    catch (error) {
        console.error("Error setting property:", error);
    }
}