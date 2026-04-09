let userMove;
let computerMove;

let moves = ["Rock","Paper","Scissors"];// 0

let score = JSON.parse(localStorage.getItem("score")) ||
{
  win : 0,
  lose : 0,
  draw : 0
};

let resultPara = document.querySelector("#js-result");
let scorePara = document.querySelector("#js-score");

scorePara.innerHTML = `Wins: ${score.win} | Lose: ${score.lose} | Draw: ${score.draw}`;


function playGame(uMove){


 userMove = moves[uMove]; //  0  --> rock
 computerMove = moves[Math.floor(Math.random() * 3)]; // 0  --> rock
  let result = "";

 if(userMove === computerMove){ // rock === paper
  result = `It's a tie!`;
  score.draw += 1;
 }else if(userMove === "Rock" && computerMove === "Scissors" ||
          userMove === "Paper" && computerMove === "Rock" ||
          userMove === "Scissors" && computerMove === "Paper"
 ){
  result = `It's a win!`;
  score.win += 1;
 }else{
  result = `It's a loss!`
  score.lose += 1;
 }

resultPara.innerHTML = `You picked ${userMove} and computer picked ${computerMove}. ${result}`;
// console.log(`You picked ${userMove} and computer picked ${computerMove}. ${result}`);
scorePara.innerHTML = `Wins: ${score.win} | Lose: ${score.lose} | Draw: ${score.draw}`
// console.log(`Wins: ${score.win} | Lose: ${score.lose} | Draw: ${score.draw}` );



localStorage.setItem("score", JSON.stringify(score));
}


function resetScore(){
  score = {
  win : 0,
  lose : 0,
  draw : 0
  } ;
  localStorage.removeItem("score");
  
  scorePara.innerHTML = `Wins: ${score.win} | Lose: ${score.lose} | Draw: ${score.draw}`;
}