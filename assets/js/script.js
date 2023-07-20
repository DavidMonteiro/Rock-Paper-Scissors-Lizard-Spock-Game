console.log("This is running :D");

function runGame() {
    let userPlay = this.getAttribute("id");
    let computerPlay = getComputerPlay();

    console.log('userplay: ', userPlay);
    console.log('computerPlay: ', computerPlay);

    let result = checkPlays(userPlay, computerPlay);

    switch (result) {
        case 1:
            console.log('You win!');
            break;
        case 2:
            console.log('Computer wins!');
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

function updateScoreBoard() { }

function displayResult() { }

let buttons = document.getElementsByClassName("btn-play");
for (let button of buttons) {
    button.addEventListener('click', runGame);
}