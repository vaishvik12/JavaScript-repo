let input = document.querySelector('#input');

function checkPrice(){
let price = input.value;
let errorDisplay = document.querySelector('#para');
if(price < 0){
  errorDisplay.innerHTML = `Error: Value cannot be less than $0`
}else{
  errorDisplay.innerHTML = ``;
}
}
