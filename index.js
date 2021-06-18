let player1name = prompt('Player 1 What is your name?');
let randomName1 = ['sparklefairy', 'firewolf', 'speedybunny', 'Gurtrude', 'Grassytoes'];
let newRandomName = randomName1[Math.floor(Math.random()* 4 + 0 )];
//generates random name out of the 5 above

if (player1name == ''){
console.log('Welcome ' + newRandomName + ' to my number guessing game!');
} else {
  console.log('Welcome ' + player1name + ' to my number guessing game');
}

let player2name = prompt('Player 2 what is your name?');
let randomName2 = ['furiousfox', 'cheekyfingernail', 'tinkerbell', 'spicyfeet', 'daryl'];
let newRandomName2 = randomName2[Math.floor(Math.random()* 4 + 0 )];

if (player2name == ''){
  console.log('welcome ' + newRandomName2 + ' to my number guessing game');
} else{
  console.log('Welcome ' + player2name + ' to my number guessing game');
}
let name1 = (player1name || newRandomName);
let name2 = (player2name || newRandomName2);
let pointPlayer1 = 0;
let pointPlayer2 = 0;
let round = 1;
//setting round and points to 0 
play();
function play(){
random = Math.floor(Math.random() * 10 + 1);
//creates a different random number
do{
  let guessPlayer1 = prompt(name1 +' guess a number from 1-10');
if (guessPlayer1 > random){
  console.log('Guess is too high');
} else if (guessPlayer1 < random){
  console.log('Guess is too low');
} else{
  console.log('Congratulations ' + name1 + ' you guessed correct!');
  pointPlayer1++;
  console.log(name1 + ' has ' + pointPlayer1 + ' points!');
  console.log(name2 + ' has ' + pointPlayer2 + ' points!');
  break;
}

let guessPlayer2 = prompt(name2 + ' guess a number from 1-10');
if (guessPlayer2 > random){
  console.log('Guess is too high');
} else if (guessPlayer2 < random){
  console.log('Guess is too low');
} else{
  console.log('Congratulations ' + name2 + ' you guessed correct!');
  pointPlayer2++;
  console.log(name1 + ' has ' + pointPlayer1 + ' points!');
  console.log(name2 + ' has ' + pointPlayer2 + ' points!');
  break;
} round++
} while (round <= 6)
//makes game only go for 3 rounds per player
let gameover = prompt('Game over, would you like to play again? Y/N')
if (gameover == 'y'){
  play();
} else{
  console.log(name1 + "'s final points: " + pointPlayer1)
  console.log(name2 + "'s final points: " + pointPlayer2)
  console.log('Bye felecia, hope you enjoyed :)')
}}