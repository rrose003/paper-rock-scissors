


/*var playerChoice = ' ';
var playerScore = 0;
var computerScore = 0;
var computerChoice = ' ';
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var computerResponse = getRandomInt(1,3);
if (computerResponse == 1) {
    computerChoice = 'rock';
    console.log(computerChoice);
} else if (computerResponse == 2) {
    computerChoice = 'paper';
    console.log(computerChoice);
} else if (computerResponse == 3) {
    computerChoice = 'scissors';
    console.log(computerChoice);
}

rock.addEventListener('click', () => { 
    playerChoice = 'rock'; 
    getRandomInt()
    console.log('player picks ' + playerChoice + ' ' + computerChoice);})
paper.addEventListener('click', () => { 
    playerChoice = 'paper'; 
    getRandomInt()
    console.log('player picks ' + playerChoice + ' ' + computerChoice);})
scissors.addEventListener('click', () => { 
    playerChoice = 'scissors'; 
    getRandomInt()
    console.log('player picks ' + playerChoice + ' ' + computerChoice);})

if (playerChoice == computerResponse) {
    if(document.getElementById('status') != null) { 
        var idPost = document.getElementById('status').innerText = 'It\'s a tie!';}
} else if (playerChoice > computerResponse) {
    let x = playerScore + 1;
    let text = 'Player: ' + x;
    if (document.getElementById('playerScore') != null) {
        var post = document.getElementById('playerScore').innerText = text;}
} else if (playerChoice < computerResponse) {
    let y = computerScore + 1;
    let scoreText = 'Computer: ' + y;
    if (document.getElementById('computerScore') != null) {
        var scoreMessage = document.getElementById('computerScore').innerText = scoreText;}
}
*/

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
//let computerChoice = '';

let buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const main = document.querySelector('main');
const endAlert = document.querySelector('#end-alert');
const endDesc = document.querySelector('#end-desc');
const returnMainButton = document.querySelector('#retry-button');
const container = document.querySelector('#results-container');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        const img = button.querySelector('img');
        playerSelection = img.alt.toLowerCase();

        playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
    });
});

const weaponsArray =  ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return weaponsArray[~~(Math.random() * weaponsArray.length)];
   /* const randomNumber = Math.floor(Math.random() * 3) +1;
    console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissors';
    } */
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    console.log(computerSelection);
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    
    if (playerSelection == computerSelection) {
        displayResults('It\'s a tie!');
    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') || 
              (computerSelection == 'paper' && playerSelection == 'rock') ||
                (computerSelection == 'scissors' && playerSelection == 'paper')) {
                    computerScore = ++computerScore;
                    keepComputerScore();
                    if (computerScore === 1|| computerScore === 2 || computerScore === 3 || computerScore === 4) {
                        displayResults(`Oh no, you lost! ${capitalize(computerSelection)} beats ${playerSelection}.`);
                    } else {
                        playerScore = ++playerScore;
                        keepPlayerScore();
                        if (playerScore === 1) {
                            displayResults(`Good job, you won! ${capitalize(playerSelection)} beat ${computerSelection}.`);
                        } else {
                            displayResults(`${capitalize(playerSelection)} beats ${computerSelection}.`);
                        }
                    }
                }
                
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayResults(string) {
    container.textContent = string;
}

function declareWinner() {
    rplContent();
    if (playerScore > computerScore) {
        endDesc.textContent = 'Congratulations! You win!';
        returnMainButton.innerText = 'Play Again';
    } else {
        endDesc.textContent = 'Sorry, you lost!';
        returnMainButton.innerText = 'Try Again?';
    }
}

function rplContent() {
    returnMainButton.addEventListener('click', () => {
        resetGame();
    });
}

function resetGame() {
    container.textContent = '';
    playerScore = 0;
    computerScore =  0;
    keepPlayerScore();
    keepComputerScore();
}

function keepPlayerScore() {
    let playerScoreBox = document.querySelector('#players-score');
    playerScoreBox.textContent = playerScore;
}

function keepComputerScore() {
    let computerScoreBox = document.querySelector('#computers-score');
    computerScoreBox.textContent = computerScore;
}