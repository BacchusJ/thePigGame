/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
// scores = [0,0];
// //this is a total score after the dices have been rolled
// roundScore = 0;
// //this is for the player who is rolling the dice at any given time
// activePlayer = 0;
// // the dice will provide a random number between 1-6. Use math random and mat floor to get an integer that isnt a decimal

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        //create a random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //display result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';


        // update round score IF the rolled number was not 1
        if (dice !== 1) {
       //add score
        roundScore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else {
       //next player "? = then", ": = else"
        nextPlayer();
       
        }

    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
            //add current score to globel score
    scores[activePlayer] += roundScore;
    //update the user interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

    //check if player won the game 

    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = "WINNER";
        //hides the dice 
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else{
         //next player when the active one chooses to hold or hits 1
        nextPlayer();
        }
    }
});

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       roundScore = 0;

       document.getElementById('current-0').textContent = '0';
       document.getElementById('current-1').textContent = '0';

       //removing and adding classes for when the player is active by using toggle
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
       
       document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
/*
queryselector lets us select stuff exactly how we do it in CSS 
we are now going to put the value of our dice in the "current" player box using querySelctor.

because we have two players and "activePlayer=0" (adding '#current-' + activePlayer) type
coercion will turn it into player 1 or player 2. So COOL! 


textContent is method telling the app where to put the content (in this case, 
inside the little red box) and it is coming from the dice which is a function
that creates a random number.
*/

// document.querySelector('#current-' + activePlayer).textContent = dice;

/*this doing the same thing but using HTML - use ' ' every time you use html inside js
*/

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';




// **hiding the dice at the beginnign of the game**

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContemt = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
/*callback function is a function passed to another function
*/
}
/*
removes the class placed onthe active player when it becomes innactive or the score becomes 0
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.add('active');
*/


