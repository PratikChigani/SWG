const options = ['snake', 'water', 'gun'];
let userScore = 0, computerScore = 0, gameLoop = 0;
let computerOption = '';
let userOption = '';
let keepPlaying = true;

while (keepPlaying) {
  do {

    // gameLoop += 1;
    // if (gameLoop == 10) {
    //   break;
    // }

    computerOption = options[Math.floor(Math.random() * options.length)][0];
    // We can use Number.parseInt() as an alternative for Math.floor()

    userOption = prompt('snake(s), water(w) or gun(g): ');

    if (userOption.startsWith('s') && computerOption.startsWith('w')) {
      userScore += 1;
      alert('WIN, SNAKE drank WATER!\n');
    }
    else if (userOption.startsWith('w') && computerOption.startsWith('s')) {
      computerScore += 1;
      alert('LOSE, SNAKE drank WATER!\n');
    }
    else if (userOption.startsWith('s') && computerOption.startsWith('g')) {
      computerScore += 1;
      alert('LOSE, SNAKE killed by GUN!\n');
    }
    else if (userOption.startsWith('g') && computerOption.startsWith('s')) {
      userScore += 1;
      alert('WIN, SNAKE killed by GUN!\n');
    }
    else if (userOption.startsWith('w') && computerOption.startsWith('g')) {
      userScore += 1;
      alert('WIN, GUN drowned in WATER!\n');
    }
    else if (userOption.startsWith('g') && computerOption.startsWith('w')) {
      computerScore += 1;
      alert('LOSE, GUN drowned in WATER!\n');
    }
    else if (userOption.startsWith('s') && computerOption.startsWith('s')) {
      userScore += 1;
      computerScore += 1;
      alert('TIE, SNAKE & SNAKE!\n');
    }
    else if (userOption.startsWith('w') && computerOption.startsWith('w')) {
      userScore += 1;
      computerScore += 1;
      alert('TIE, WATER & WATER!\n');
    }
    else if (userOption.startsWith('g') && computerOption.startsWith('g')) {
      userScore += 1;
      computerScore += 1;
      alert('TIE, GUN & GUN!\n');
    }
    else {
      continue;
    }
    gameLoop += 1;
  } while (gameLoop != 10)
  if (userScore > computerScore) {
    alert('Game is over & you have WON the game!\nYour score:', userScore, "&\nComputer's score:", computerScore, '\n');
  }
  else if (userScore < computerScore) {
    alert('Game is over & you have LOST the game!\nYour score:', userScore, "&\nComputer's score:", computerScore, '\n');
  }
  else {
    alert("Game is over & it's TIE !\nYour score:", userScore, "&\nComputer's score:", computerScore, '\n');
    gameLoop = 0, userScore = 0, computerScore = 0;
    userOption = '', computerOption = '';
  }
  keepPlaying = confirm('Do you want to play again?');
}
