/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
//this is a total score after the dices have been rolled
roundScore = 0;
//this is for the player who is rolling the dice at any given time
activePlayer = 1;
// the dice will provide a random number between 1-6. Use math random and mat floor to get an integer that isnt a decimal

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

/*
queryselector lets us select stuff exactly how we do it in CSS 
we are now going to put the value of our dice in the "current" player box using querySelctor.

because we have two players and "activePlayer=0" (adding '#current-' + activePlayer) type
coercion will turn it into player 1 or player 2. So COOL! 


textContent is method telling the app where to put the content (in this case, 
inside the little red box) and it is coming from the dice which is a function
that creates a random number.
*/

document.querySelector('#current-' + activePlayer).textContent = dice;

/*this doing the same thing but using HTML - use ' ' every time you use html inside js
*/

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';




// **hiding the dice at the beginnign of the game**

document.querySelector('.dice').style.display = 'none';

// //callback function is a function passed to another function
// function btn() {

// }

// btn();

document.querySelector('btn-roll').addEventListener(click, function() {
//create a random numer
    dice = Math.floor(Math.random() * 6) + 1;

    //display result

    document.querySelector('.dice').style.display = 'block';

    //update round score IF the rolled number was not 1

});
//what if I add a comment here 



