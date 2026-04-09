let counter = localStorage.getItem("score") || 1;

function increaseCounter(){

  alert(`You pressed this button ${counter} many times`);
  counter++;
  localStorage.setItem("score",counter); 
};