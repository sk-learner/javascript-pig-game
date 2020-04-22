/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,roundscore,activeplayer,gameplaying;



init();






document.querySelector('.btn-roll').addEventListener('click',function()
{
    if (gameplaying)
    {

    
    
    var dice = Math.floor(Math.random() * 6)+1;

    var doms= document.querySelector('.dice');
    doms.style.display = 'block';
    
    doms.src = 'dice-' + dice + '.png';


    if (dice!== 1)
{
   roundscore += dice;
   document.querySelector('#current-' + activeplayer).textContent = roundscore;
}
else
{
    
    nextplayer();
}
}  

});

document.querySelector('.btn-hold').addEventListener('click',function()
{

    if (gameplaying)
    {


    score[activeplayer] += roundscore;
    
    document.querySelector('#score-'+ activeplayer).textContent = score[activeplayer];


    if (score[activeplayer] >= 100)
    {
        document.querySelector('#name-'+ activeplayer).textContent = 'winner';
        document.querySelector('.dice').style.display = 'none';
        gameplaying =false;

    }
    else
    {
    nextplayer();
    }
}

});


function nextplayer() {
    activeplayer === 0 ? activeplayer=1 : activeplayer= 0;
    roundscore =0;
    document.getElementById('current-0').textContent= '0';
    document.getElementById('current-1').textContent= '0';
   // document.querySelector('.player-0-panel').claasslist.remove('active');
    //document.querySelector('.player-1-panel').claasslist.remove('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';


}

document.querySelector('.btn-new').addEventListener('click',init);


function init()
{
score = [0,0];
roundscore = 0;
activeplayer = 0;
gameplaying = true;



document.querySelector('.dice').style.display = 'none';



document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

}

