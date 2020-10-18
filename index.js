var randomNumber = (Math.floor((Math.random() * 6))  );

var randomNumber2  = (Math.floor((Math.random() * 6)) );
var diceImages = [ 'images/dice1.png', 'images/dice2.png',  'images/dice3.png',  'images/dice4.png', 'images/dice5.png',  'images/dice6.png'];

document.querySelector('img.img1').setAttribute('src', diceImages[randomNumber]);

document.querySelector('img.img2').setAttribute('src', diceImages[randomNumber2]);

if(randomNumber > randomNumber2)
  document.querySelector('h1').innerHTML = '&#128681 Player1 Wins';
else if (randomNumber2 > randomNumber)
  document.querySelector('h1').innerHTML = 'Player2 Wins &#128681';
else
  document.querySelector('h1').innerHTML = 'Draw!';
