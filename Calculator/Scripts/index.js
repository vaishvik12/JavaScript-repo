let mathEq = "";
 let input = document.querySelector("#js-input");


function calculate(num){
  mathEq += num;
 input.value = `${mathEq}`;
}

function showResult(){
  let result = eval(mathEq);
input.value = `${result}`;
mathEq = result; 
}


function resetValue(){
  mathEq = "";
  input.value = mathEq;
}