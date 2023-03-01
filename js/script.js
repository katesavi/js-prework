function playGame () {

function clearMessages(){
  document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
    
  if( argMoveId == 1){
    argComputerMove = 'kamień';
   
  }

  else if( argMoveId == 2){
    argComputerMove = 'papier'; 
  }

  else if( argMoveId == 3){
    argComputerMove = 'nożyce'; 
  }

}
/*

printMessage('Nie znam ruchu o id ' + argMoveId + '.');
return 'nieznany ruch';
}     




if(randomNumber == 1){
computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

/*let argPlayerMove =  getMoveName(playerInput); */

function getMoveName(argMoveId){
if(argMoveId == '1'){
  argPlayerMove = 'kamień';
  
}
else if(argMoveId == '2'){
  argPlayerMove = 'papier';
  
}
else if(argMoveId == '3'){
  argPlayerMove = 'nożyce';
  
}
else {
  argPlayerMove = 'Nieznany ruch';
  
}
}
printMessage('Twój ruch to: ' + argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}
console.log('moves:', argComputerMove, argPlayerMove);
/*
else if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Wygrywasz!');
}
else if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
}
else if(computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage('Przegrywasz!')
}
else if(computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Wygrywasz!')
}
else if(computerMove == 'papier' && playerMove == 'papier') {
  printMessage('Remis!')
}
else if(computerMove == 'papier' && playerMove == 'kamień') {
  printMessage('Przegrywasz!')
}
else if(computerMove == 'nożyce' && playerMove == 'nożyce') {
  printMessage('Remis!')
}
else if(computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Przegrywasz!')
}
else if(computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Wygrywasz!')
} */
}
playGame(3);



function buttonClicked(){
  playGame('kamień');
}
play_rock.addEventListener('click', buttonClicked);

let play_rock = document.getElementById('test-button');



function buttonClicked(){
  playGame('Papier');
}
play_paper.addEventListener('click', buttonClicked);

let play_paper = document.getElementById('test-button');



function buttonClicked(){
  playGame('noźyce');
}
play_scissors.addEventListener('click', buttonClicked);

let play_scissors = document.getElementById('test-button');