


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

let buttons = document.querySelectorAll('button');

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
console.log(playerSelection);
