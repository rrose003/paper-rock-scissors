var losses = 0;
var wins = 0;

const play = function(playerChoice) {
    /*if (wins > 4) {
        alert('You\'ve beat the computer 5 times! Congratulations, you won!');
        return reset();
    } else if (losses > 4) {
        alert('The computer has beat you 5 times! Sorry, you lost.');
        return reset();
    }; */

    document.getElementById('player').innerHTML = '';
    document.getElementById('computer').innerHTML = '';
    document.getElementById('results').innerHTML = '';

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        document.getElementById('player').innerHTML = `You chose ${playerChoice}. `;
    } else {
        document.getElementById('player').innerHTML = 'That is not a valid choice, try again.';
        return false;
    };

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = 'rock';
    } else if (computerChoice <= 0.67 && computerChoice > 0.33) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    document.getElementById('computer').innerHTML = `// The computer chose ${computerChoice}.`;
    
    var compare = function(choice1,choice2) {
        if (choice1 === choice2) {
            return 'The result is a tie!';
        } else if (choice1 === 'rock') {
            if (choice2 === 'scissors') {
                ++wins;
                return 'Rock wins!';
            } else {
                ++losses;
                return 'Sorry, paper wins!';
            }
        } else if (choice1 === 'paper') {
            if (choice2 === 'rock') {
                ++wins;
                return 'Paper wins!';
            } else {
                ++losses;
                return 'Sorry, scissors wins!';
            }
        } else if (choice1 === 'scissors') {
            if (choice2 === 'rock') {
                ++losses;
                return 'Sorry, rock wins!';
            } else {
                ++wins;
                return 'Scissors win!';
            }
        } else {
            return 'Game over.';
        }
    }
    var winner = compare(playerChoice, computerChoice);
    document.getElementById('results').innerHTML = winner;
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    
    if (wins > 99 || losses > 99) {
        alert('You have played 99 rounds! <br />Take a break and go outside!');
   } 
   
   if (wins >= 999 && losses >= 999) {
       alert('You reached the max score of 999. <br />Congratulations, you have no life.');
       alert('Your opponent reached the max score of 999. <br />Sorry, you have no life!');
       return reset();
   };
};

var reset = function() {
    losses = 0;
    wins = 0;
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('results').innerHTML = '';
    document.getElementById('player').innerHTML = '';
    document.getElementById('computer').innerHTML = '';
};



