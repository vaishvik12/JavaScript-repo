// let runButton = document.querySelector("#run-button");

// function showAlert(){
//   console.log("Alert printed")
// }

// function printSomething(){
//   console.log("Something printed");
// }


// runButton.addEventListener("click",showAlert);

// runButton.removeEventListener("click", showAlert);

// runButton.addEventListener("click", () => {
//   printSomething();
// })


let stopButton = document.querySelector(".js-stop-button");

stopButton.addEventListener("click",stopTheButton);
stopButton.removeEventListener("click",stopTheButton);

stopButton.addEventListener("click",stopTheButton2);

// stopButton.removeEventListener("click",stopTheButton2);

function stopTheButton(){
  console.log("task has been stopped");
}

function stopTheButton2(){
  console.log("Stopping the task");
}

