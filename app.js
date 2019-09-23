/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//defining variable in the global scope
var scores, roundscore, activePlayer, gamePlaying;

initialization();			//calling the initial function active of the player



//rolling button function
document.querySelector('.btn-roll').addEventListener('click' , function() {
	if(gamePlaying)
	{
		var dice = Math.floor(Math.random()*6 + 1); //dice score fixing
		console.log(dice);
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block'; //for display the dice pic
		diceDOM.src = 'dice-' + dice + '.png'; //change dice pic with the score

							if(dice !== 1) //for dice switching and current score matching with dice
								{

											roundscore += dice; //store dice score to round score
											document.querySelector('#current-' + activePlayer).textContent = roundscore; //score saving
								}
								else
								{
									nextPlayer();			//call the next player if the value is one
								}
}
});


//function for the next player

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //use of ternarry operator
	roundscore = 0; //initial round score

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active'); //point changeswitching playeractive for 1st
	document.querySelector('.player-1-panel').classList.toggle('active'); ////point changeswitching playeractive for 2nd

	document.querySelector('.dice').style.display = 'none'; //if dice value is one than dont show dice
}



// function for the hold button
document.querySelector('.btn-hold').addEventListener('click' , function(){
	if(gamePlaying){
		scores[activePlayer] += roundscore;
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		if(scores[activePlayer] >= 100){
			document.querySelector('#name-' + activePlayer).textContent = 'winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); //when reach the desired score declare active as winner
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); //when the winner changes than remove the active player
			gamePlaying = false;
		}
		else
		{
			nextPlayer();
		}
	}


});
//for new game button function will call initialization function
document.querySelector('.btn-new').addEventListener('click', initialization);



//function for the initialization for the 1st step
function initialization() {
 scores = [0, 0];
 activePlayer = 0;
 roundscore = 0;
 gamePlaying = true;
//to display img as none
 document.querySelector('.dice').style.display = 'none';
//reset mainscore
 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 //reset currentscore
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';

 //reset name
 document.getElementById('name-0').textContent = 'Player1';
 document.getElementById('name-1').textContent = 'Player2';
 //for activeplayer and showing winner
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');



}
