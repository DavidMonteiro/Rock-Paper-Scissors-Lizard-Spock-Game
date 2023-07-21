console.log("This is running :D");
var userScore;
var computerScore;



function runGame() {
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
            console.log('It\'s a tie! Play again.');
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
function setScoreBoard() {
    userScore = 0;
    computerScore = 0;

    let scoreBoard = document.getElementById("score-board");
    scoreBoard.innerHTML = `
        <p>Score: 
            <spam>You ${userScore}</spam> - 
            <spam>${computerScore} Computer</spam>
        </p>`;
    console.log("event is working ");
}
function updateScoreBoard(winner) {
    if (winner === 1) {
        userScore += 1;
    }
    else if (winner === 2) {
        computerScore += 1;
    }
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

function displayResult() { }

let buttons = document.getElementsByClassName("btn-play");
for (let button of buttons) {
    button.addEventListener('click', runGame);
}

let scoreBoard = document.getElementById("score-board");
scoreBoard.addEventListener("DOMContentLoaded", setScoreBoard());
