// winning.js
export function winning(diceOne, diceTwo) {
  if (diceOne > diceTwo) {
    return "win";
  } else if (diceOne === diceTwo) {
    return "draw";
  } else {
    return "lost";
  }
}
