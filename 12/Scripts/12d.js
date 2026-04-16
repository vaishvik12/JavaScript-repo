let startButton = document.querySelector("#start-button");

let startActive = false;
function activateButton(){
  startButton.innerHTML = 'Loading...';
  if(!startActive){
  setTimeout(() => {
    startButton.innerHTML = `Finished`; 
  },1000);
  startActive = true;
}else{
  startButton.innerHTML = 'Start';
  startActive = false;
}
};