
const playerText = document.querySelector("#playerText");

const computerText = document.querySelector("#computerText");

const resultText = document.querySelector("#resultText");

const choiceButtons = document.querySelectorAll(".choiceButton");

let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  console.log(player)
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  result = checkWinner(player, computer);
  resultText.textContent = `You : ${result}`;
}));

function computerTurn(){
  const randNum = Math.floor(Math.random()*3) + 1;

  switch(randNum){
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissor";
      break;
  }
}

function checkWinner(player, computer){
console.log(typeof player, typeof computer)
if (player === computer) {
  return 'draw'}
if ((player === "Rock" && computer === "Scissor") ||
(player === "Paper" && computer === "Rock") ||
(player === "Scissor" && computer === "Paper"))
{return 'win'}
return 'lose'
}