function displayResult(computerMove, playerMove){
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  if(computerMove === 'kamień' && playerMove === 'papier'){
    printMessage('Ty wygrywasz!');
  } else if( computerMove == 'kamień' && playerMove == 'papier'){
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
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}

function playGame (playerMove) {
  // Czyszczenie starych wiadomości
  clearMessages();

// Ruch komputera
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let argComputerMove = getMoveName(randomNumber);

  // Ruch użytkownika
  let argPlayerMove = getMoveName(playerMove)

  // Wyświetlenie wyników
  displayResult(argComputerMove, argPlayerMove);
}

// Buttony
let play_rock = document.getElementById('play_rock');
play_rock.addEventListener('click', () => playGame(1));

let play_paper = document.getElementById('play_paper');
play_paper.addEventListener('click', () => playGame(2));


let play_scissors = document.getElementById('play_scissors');
play_scissors.addEventListener('click', () => playGame(3));

let clear = document.getElementById('clear');
clear.addEventListener('click', clearMessages);
